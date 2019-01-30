<?php
/* +***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 * Contributor(s): YetiForce.com.
 * *********************************************************************************** */

class Install_Index_View extends \App\Controller\View
{
	use \App\Controller\ExposeMethod;
	/**
	 * @var bool
	 */
	protected $debug = false;
	/**
	 * @var Vtiger_Viewer
	 */
	protected $viewer;

	public function checkPermission(\App\Request $request)
	{
	}

	public function loginRequired()
	{
		return false;
	}

	/**
	 * Set language.
	 *
	 * @param \App\Request $request
	 *
	 * @return \App\Request
	 */
	public function setLanguage(\App\Request $request)
	{
		if (!$request->getByType('lang', 1)) {
			$lang = '';
			if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
				$languages = Install_Utils_Model::getLanguages();
				array_walk($languages, function (&$shortCode, $code) {
					$shortCode = Locale::getPrimaryLanguage($code);
				});
				foreach (explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']) as $code) {
					if (isset($languages[$code]) || ($code = array_search(Locale::acceptFromHttp($code), $languages)) !== false) {
						$lang = $code;
						break;
					}
				}
			}
			if (!$lang) {
				$lang = \App\Language::DEFAULT_LANG;
			}
			$request->set('lang', $lang);
		}
		return $request;
	}

	public function __construct()
	{
		parent::__construct();
		$this->exposeMethod('step1');
		$this->exposeMethod('step2');
		$this->exposeMethod('step3');
		$this->exposeMethod('step4');
		$this->exposeMethod('step5');
		$this->exposeMethod('step6');
		$this->exposeMethod('step7');
	}

	public function preProcess(\App\Request $request, $display = true)
	{
		if ($request->getMode() !== 'step5') {
			date_default_timezone_set('UTC'); // to overcome the pre configuration settings
		}
		// Added to redirect to default module if already installed
		$request->set('module', 'Install');
		$request = $this->setLanguage($request);

		if ($request->getMode() !== 'step7' && \App\Config::main('application_unique_key', false)) {
			$defaultModule = \AppConfig::main('default_module');
			$defaultModuleInstance = Vtiger_Module_Model::getInstance($defaultModule);
			$defaultView = $defaultModuleInstance->getDefaultViewName();
			header('location: ../index.php?module=' . $defaultModule . '&view=' . $defaultView);
		}
		$_SESSION['default_language'] = $defaultLanguage = ($request->getByType('lang', 1)) ? $request->getByType('lang', 1) : \App\Language::DEFAULT_LANG;
		App\Language::setTemporaryLanguage($defaultLanguage);
		$this->loadJsConfig($request);
		$this->viewer = new Vtiger_Viewer();
		$this->viewer->setTemplateDir('install/tpl/');
		$this->viewer->assign('LANGUAGE_STRINGS', $this->getJSLanguageStrings($request));
		$this->viewer->assign('LANG', $request->getByType('lang', 1));
		$this->viewer->assign('HTMLLANG', substr($defaultLanguage, 0, 2));
		$this->viewer->assign('LANGUAGE', $defaultLanguage);
		$this->viewer->assign('STYLES', $this->getHeaderCss($request));
		$this->viewer->assign('HEADER_SCRIPTS', $this->getHeaderScripts($request));
		$this->viewer->assign('MODE', $request->getMode());
		$this->viewer->assign('YETIFORCE_VERSION', \App\Version::get());
		$this->viewer->error_reporting = E_ALL & ~E_NOTICE;
		$this->viewer->display('InstallPreProcess.tpl');
	}

	public function process(\App\Request $request)
	{
		$mode = $request->getMode();
		if (!empty($mode) && $this->isMethodExposed($mode)) {
			return $this->$mode($request);
		}
		$this->step1($request);
	}

	public function postProcess(\App\Request $request, $display = true)
	{
		$this->viewer->assign('FOOTER_SCRIPTS', $this->getFooterScripts($request));
		$this->viewer->display('InstallPostProcess.tpl');
	}

	public function step1(\App\Request $request)
	{
		$isMigrate = false;
		if (is_dir(ROOT_DIRECTORY . '/install/migrate_schema/')) {
			$filesInDir = scandir(ROOT_DIRECTORY . '/install/migrate_schema/');
			if (count($filesInDir) > 2) {
				$isMigrate = true;
			}
		}
		$this->viewer->assign('LANGUAGES', Install_Utils_Model::getLanguages());
		$this->viewer->assign('IS_MIGRATE', $isMigrate);
		$this->viewer->display('Step1.tpl');
	}

	public function step2(\App\Request $request)
	{
		if ($_SESSION['default_language'] === 'pl-PL') {
			$license = file_get_contents('licenses/LicensePL.txt');
		} else {
			$license = file_get_contents('licenses/LicenseEN.txt');
		}
		$this->viewer->assign('LIBRARIES', \App\Installer\Credits::getCredits());
		$this->viewer->assign('LICENSE', nl2br($license));
		$this->viewer->display('Step2.tpl');
	}

	public function step3(\App\Request $request)
	{
		$this->viewer->assign('CURRENCIES', Install_Utils_Model::getCurrencyList());
		require_once ROOT_DIRECTORY . '/modules/Users/UserTimeZonesArray.php';
		$this->viewer->assign('TIMEZONES', UserTimeZones::getTimeZones());

		$defaultParameters = Install_Utils_Model::getDefaultPreInstallParameters();
		$this->viewer->assign('USERNAME_BLACKLIST', require ROOT_DIRECTORY . '/config/username_blacklist.php');
		$this->viewer->assign('DB_HOSTNAME', $defaultParameters['db_server']);
		$this->viewer->assign('DB_USERNAME', $defaultParameters['db_username']);
		$this->viewer->assign('DB_PASSWORD', $defaultParameters['db_password']);
		$this->viewer->assign('DB_NAME', $defaultParameters['db_name']);
		$this->viewer->assign('ADMIN_NAME', $defaultParameters['admin_name']);
		$this->viewer->assign('ADMIN_FIRSTNAME', $defaultParameters['admin_firstname']);
		$this->viewer->assign('ADMIN_LASTNAME', $defaultParameters['admin_lastname']);
		$this->viewer->assign('ADMIN_PASSWORD', $defaultParameters['admin_password']);
		$this->viewer->assign('ADMIN_EMAIL', $defaultParameters['admin_email']);
		$this->viewer->display('Step3.tpl');
	}

	public function step4(\App\Request $request)
	{
		set_time_limit(60); // Override default limit to let install complete.
		$error = false;
		$configFile = new \App\ConfigFile('db');
		foreach ($configFile->getTemplate() as $name => $data) {
			if ($request->has($name)) {
				try {
					$configFile->set($name, $request->getRaw($name));
					$_SESSION['config_file_info'][$name] = $configFile->get($name);
				} catch (\Throwable $e) {
					$_SESSION['config_file_info'][$name] = '';
					$error = true;
				}
			}
		}
		$dbConnection = Install_Utils_Model::checkDbConnection($configFile->getData());
		if (!$dbConnection['flag']) {
			$error = true;
		}
		$configFile = new \App\ConfigFile('main');
		foreach ($configFile->getTemplate() as $name => $data) {
			if ($request->has($name)) {
				try {
					$configFile->set($name, $request->get($name));
					$_SESSION['config_file_info'][$name] = $configFile->get($name);
				} catch (\Throwable $e) {
					$_SESSION['config_file_info'][$name] = '';
					$error = true;
				}
			}
		}
		$webRoot = ($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'];
		$webRoot .= $_SERVER['REQUEST_URI'];
		$webRoot = str_replace('index.php', '', $webRoot);
		$webRoot = (isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) ? 'https://' : 'http://') . $webRoot;
		$tabUrl = explode('/', $webRoot);
		unset($tabUrl[count($tabUrl) - 1], $tabUrl[count($tabUrl) - 1]);
		$webRoot = implode('/', $tabUrl) . '/';
		$name = 'site_URL';
		try {
			$configFile->set($name, $webRoot);
			$_SESSION['config_file_info'][$name] = $configFile->get($name);
		} catch (\Throwable $e) {
			$_SESSION['config_file_info'][$name] = '';
			$error = true;
		}
		foreach (['user_name', 'password', 'retype_password', 'firstname', 'lastname', 'admin_email', 'dateformat', 'currency_name'] as $name) {
			if ($request->has($name)) {
				switch ($name) {
					case 'currency_name':
						$currencies = Install_Utils_Model::getCurrencyList();
						if (($value = $request->get('currency_name')) && isset($currencies[$value])) {
							$_SESSION['config_file_info']['currency_code'] = $currencies[$value][0];
							$_SESSION['config_file_info']['currency_symbol'] = $currencies[$value][1];
						} else {
							$value = '';
						}
						break;
					case 'password':
					case 'retype_password':
						$value = $request->getRaw($name);
						break;
					default:
						$value = $request->get($name);
						break;
				}
				$_SESSION['config_file_info'][$name] = $value;
			}
		}
		$this->viewer->assign('BREAK_INSTALL', $error);
		$this->viewer->assign('DB_CONNECTION_INFO', $dbConnection);
		$this->viewer->assign('INFORMATION', $_SESSION['config_file_info'] ?? []);
		$this->viewer->assign('AUTH_KEY', $_SESSION['config_file_info']['authentication_key'] = sha1(microtime()));
		$this->viewer->display('Step4.tpl');
	}

	public function step5(\App\Request $request)
	{
		if ($_SESSION['config_file_info']['db_server'] ?? false) {
			$success = true;
			$configFile = new \App\ConfigFile('db');
			foreach ($configFile->getTemplate() as $name => $data) {
				try {
					if (isset($_SESSION['config_file_info'][$name])) {
						$configFile->set($name, $_SESSION['config_file_info'][$name]);
					}
				} catch (\Throwable $e) {
					$success = false;
					\App\Log::error($e->__toString());
					unset($_SESSION['config_file_info'][$name]);
				}
			}
			if ($success) {
				$configFile->create();
			}
		} else {
			Install_Utils_Model::cleanConfiguration();
		}
		$this->viewer->assign('ALL', \App\Utils\ConfReport::getAll());
		$this->viewer->display('Step5.tpl');
	}

	/**
	 * Create configuration file.
	 *
	 * @param \App\Request $request
	 *
	 * @throws \SmartyException
	 */
	public function step6(\App\Request $request)
	{
		$configFile = new \App\ConfigFile('main');
		foreach ($configFile->getTemplate() as $name => $data) {
			if (isset($_SESSION['config_file_info'][$name])) {
				$configFile->set($name, $_SESSION['config_file_info'][$name]);
			}
		}
		$configFile->set('application_unique_key', '');
		$configFile->create();
		$this->viewer->assign('AUTH_KEY', $_SESSION['config_file_info']['authentication_key']);
		$this->viewer->display('Step6.tpl');
	}

	public function step7(\App\Request $request)
	{
		set_time_limit(0);
		if (\App\Config::main('application_unique_key', false)) {
			if ($_SESSION['config_file_info']['authentication_key'] !== $request->get('auth_key')) {
				Install_Utils_Model::cleanConfiguration();
				throw new \App\Exceptions\AppException('ERR_NOT_AUTHORIZED_TO_PERFORM_THE_OPERATION');
			}
			// Initialize and set up tables
			$initSchema = new Install_InitSchema_Model();
			try {
				$initSchema->initialize();
				$initSchema->setCompanyDetails($request);
			} catch (\Throwable $e) {
				$_SESSION['installation_success'] = false;
				\App\Log::error($e->__toString());
			}
			$this->viewer->assign('USER_NAME', $_SESSION['config_file_info']['user_name'] ?? '');
			$this->viewer->assign('PASSWORD', $_SESSION['config_file_info']['password'] ?? '');
		}
		if (!($success = $_SESSION['installation_success'] ?? false)) {
			Install_Utils_Model::cleanConfiguration();
		}
		$this->viewer->assign('INSTALLATION_SUCCESS', $success);
		$this->viewer->display('Step7.tpl');
	}

	protected function preProcessDisplay(\App\Request $request)
	{
	}

	public function validateRequest(\App\Request $request)
	{
		return $request->validateWriteAccess(true);
	}

	/**
	 * Retrieves css styles that need to loaded in the page.
	 *
	 * @param \App\Request $request - request model
	 *
	 * @return Vtiger_CssScript_Model[]
	 */
	public function getHeaderCss(\App\Request $request)
	{
		$headerCssInstances = parent::getHeaderCss($request);
		$cssFileNames = [
			'~libraries/datatables.net-bs4/css/dataTables.bootstrap4.css',
			'~libraries/datatables.net-responsive-bs4/css/responsive.bootstrap4.css',
			'~libraries/@fortawesome/fontawesome-free/css/all.css',
			'~install/tpl/resources/css/style.css',
			'~install/tpl/resources/css/mkCheckbox.css'
		];
		$cssInstances = $this->checkAndConvertCssStyles($cssFileNames);

		return array_merge($headerCssInstances, $cssInstances);
	}

	public function getHeaderScripts(\App\Request $request)
	{
		return $this->checkAndConvertJsScripts([
			'libraries.jquery.dist.jquery'
		]);
	}

	/**
	 * Function to get the list of Script models to be included.
	 *
	 * @param \App\Request $request
	 *
	 * @return Vtiger_JsScript_Model[]
	 */
	public function getFooterScripts(\App\Request $request)
	{
		if ($request->getMode() === 'step7') {
			return [];
		}
		return array_merge(parent::getFooterScripts($request), $this->checkAndConvertJsScripts([
			'~libraries/datatables.net/js/jquery.dataTables.js',
			'~libraries/datatables.net-bs4/js/dataTables.bootstrap4.js',
			'~libraries/datatables.net-responsive/js/dataTables.responsive.js',
			'~libraries/datatables.net-responsive-bs4/js/responsive.bootstrap4.js',
			'~install/tpl/resources/Index.js',
		]));
	}
}

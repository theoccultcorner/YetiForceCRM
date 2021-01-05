<?php
/**
 * Users cli file.
 *
 * @package   App
 *
 * @copyright YetiForce Sp. z o.o
 * @license   YetiForce Public License 3.0 (licenses/LicenseEN.txt or yetiforce.com)
 * @author    Mariusz Krzaczkowski <m.krzaczkowski@yetiforce.com>
 */

namespace App\Cli;

/**
 * Users cli class.
 */
class Users extends Base
{
	/** @var string[] Methods list */
	public $methods = [
		'resetPassword' => 'Reset user password',
		'resetAllPasswords' => 'Reset all user passwords',
	];

	/**
	 * Reset user password.
	 *
	 * @return void
	 */
	public function resetPassword(): void
	{
		$this->cli->climate->arguments->add([
			'login' => [
				'prefix' => 'l',
				'description' => 'Login',
			],
			'password' => [
				'prefix' => 'p',
				'description' => 'Password',
			],
		]);
		$this->cli->climate->arguments->parse();
		if ($this->cli->climate->arguments->defined('login')) {
			$userName = $this->cli->climate->arguments->get('login');
		} else {
			$input = $this->cli->climate->input('Enter login/username:');
			$userName = $input->prompt();
		}
		$row = (new \App\Db\Query())->select(['id', 'deleted'])->from('vtiger_users')->where(['or', ['user_name' => $userName], ['user_name' => strtolower($userName)]])->limit(1)->one();
		if (!$row) {
			$this->cli->climate->red('User not found');
			if ($this->cli->climate->confirm('Re-enter login?')->confirmed()) {
				$this->resetPassword();
			} else {
				$this->cli->actionsList('Users');
			}
			return;
		}
		$userRecordModel = \Users_Record_Model::getInstanceById($row['id'], 'Users');
		$this->cli->climate->lightBlue($userRecordModel->getDisplayName() . ' (' . $userRecordModel->getDisplayValue('roleid', false, true) . ')');
		if (0 !== (int) $row['deleted']) {
			$this->cli->climate->lightGreen('User inactive!!!');
		}
		if ($this->cli->climate->arguments->defined('password')) {
			$password = $this->cli->climate->arguments->get('password');
		} else {
			if ($this->cli->climate->confirm('Generate a password?')->confirmed()) {
				$password = \App\Encryption::generateUserPassword();
				$this->cli->climate->lightGreen('New password: ' . $password);
			} else {
				$input = $this->cli->climate->password('Please enter a new password:');
				$password = $input->prompt();
			}
		}
		$userRecordModel->set('changeUserPassword', true);
		$userRecordModel->set('user_password', $password);
		$userRecordModel->set('date_password_change', date('Y-m-d H:i:s'));
		$userRecordModel->set('force_password_change', 0);

		$eventHandler = new \App\EventHandler();
		$eventHandler->setRecordModel($userRecordModel);
		$eventHandler->setModuleName('Users');
		$eventHandler->setParams(['action' => 'reset']);
		$eventHandler->trigger('UsersBeforePasswordChange');
		$userRecordModel->save();
		$eventHandler->trigger('UsersAfterPasswordChange');
		if ($this->cli->climate->confirm('Send password to user\'s email address?')->confirmed()) {
			\App\Mailer::sendFromTemplate([
				'template' => 'UsersResetPassword',
				'moduleName' => 'Users',
				'recordId' => $userRecordModel->getId(),
				'to' => $userRecordModel->get('email1'),
				'password' => $password,
			]);
		}
		$this->cli->actionsList('Users');
	}

	/**
	 * Reset all user passwords.
	 *
	 * @return void
	 */
	public function resetAllPasswords(): void
	{
		$this->cli->climate->lightBlue('New passwords will be sent to the user\'s e-mail, it is required that the e-mail sending works properly.');
		if (!$this->cli->climate->confirm('Do you want to reset the passwords of all active users?')->confirmed()) {
			$this->cli->actionsList('Users');
			return;
		}
		$userIds = (new \App\Db\Query())->select(['id'])->from('vtiger_users')->where(['deleted' => 0])->column();
		$progress = $this->cli->climate->progress()->total(\count($userIds));
		$i = 0;
		foreach ($userIds as $userId) {
			$password = \App\Encryption::generateUserPassword();
			$userRecordModel = \Users_Record_Model::getInstanceById($userId, 'Users');
			$userRecordModel->set('changeUserPassword', true);
			$userRecordModel->set('user_password', $password);
			$userRecordModel->set('date_password_change', date('Y-m-d H:i:s'));
			$userRecordModel->set('force_password_change', 0);

			$eventHandler = new \App\EventHandler();
			$eventHandler->setRecordModel($userRecordModel);
			$eventHandler->setModuleName('Users');
			$eventHandler->setParams(['action' => 'massReset']);
			$eventHandler->trigger('UsersBeforePasswordChange');
			$userRecordModel->save();
			$eventHandler->trigger('UsersAfterPasswordChange');

			\App\Mailer::sendFromTemplate([
				'template' => 'UsersResetPassword',
				'moduleName' => 'Users',
				'recordId' => $userRecordModel->getId(),
				'to' => $userRecordModel->get('email1'),
				'password' => $password,
			]);
			$progress->advance();
			++$i;
		}
		$this->cli->climate->lightGreen('Number of passwords reset: ' . $i);
	}
}

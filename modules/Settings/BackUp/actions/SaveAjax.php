<?php
/* {[The file is published on the basis of YetiForce Public License that can be found in the following directory: licenses/License.html]} */
class Settings_BackUp_SaveAjax_Action extends Settings_Vtiger_IndexAjax_View {

	function __construct() {
		parent::__construct();
		$this->exposeMethod('updateUsersForNotifications');

	}

	public function updateUsersForNotifications(Vtiger_Request $request) {
		$params = $request->get('selectedUsers');
		Settings_BackUp_Module_Model::updateUsersForNotifications($params);
		$response = new Vtiger_Response();
		$response->setResult(array(
			'success' => true,
			'message' => vtranslate('LBL_SAVE_CHANGES', $request->getModule(false))
		));
		$response->emit();
	}
}

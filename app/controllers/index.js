var args = arguments[0] || {};
$.index.open();
$.doLoginBtn.addEventListener('click', doLoginBtnClicked);

function doLoginBtnClicked() {

	// create instance of the user model
	var user = Alloy.createModel('User');

	// call the extended model’s function
	user.login($.email.value, $.password.value, userActionResponseHandler);
};
function userActionResponseHandler(_resp) {
	if (_resp.success === true) {

		alert("loginSuccess");
		$.loginText.text = _resp.model.id;
		// Do stuff after successful login.
		//Alloy.Globals.loggedIn = true;
		//Alloy.Globals.CURRENT_USER = _resp.model;

		//$.parentController.loginSuccessAction(_resp);

	} else {
		// Show the error message and let the user try again.
		alert("loginFailed", _resp.error.message);

		//Alloy.Globals.CURRENT_USER = null;
		//Alloy.Globals.loggedIn = false;
	}
};

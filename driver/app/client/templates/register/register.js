/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
  'submit #register-form':function(e,t){
    e.preventDefault();
    var email = t.find('#account-email').value
      , password = t.find('#account-password').value
      ,supplier = t.find('#account-supplier').value;
    // Trim and validate the input
    Accounts.createUser({email: email, password : password,supplier:supplier}, function(err){
      if (err) {
        // Inform the user that account creation failed
        Template.Alert.unity.displayErrorAlert(err.reason,t);
      } else {
        // Success. Account has been created and the user
        // has logged in successfully.
        Template.Alert.unity.displaySuccessAlert('Success!',t);
      }

    });

    return false;
  }
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({

});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.onCreated(function () {
});

Template.Register.onRendered(function () {
});

Template.Register.onDestroyed(function () {
});

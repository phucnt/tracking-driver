/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'click #btnLogin':function(e){
//    e.preventDefault();
//    window.location.href='/check';
  },
  'submit form':function(e,t) {
    e.preventDefault();
    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;
    // Trim and validate your fields here....

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, function (err) {
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        Template.Alert.unity.displayErrorAlert(err.reason,t);
      }
      else
      // The user has been logged in.
      window.location.href = '/check';
    });
    return false;

  }


});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});

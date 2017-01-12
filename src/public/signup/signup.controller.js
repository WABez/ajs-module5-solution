(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService','UserPreferenceService'];
  function SignUpController(MenuService, UserPreferenceService) {
    var signUpCtrl = this;
      
    signUpCtrl.submit = function () {
      var promise = MenuService.getMenuItem(signUpCtrl.user.favorite);
      signUpCtrl.successMsg = null;  
      signUpCtrl.error = null;
      signUpCtrl.menuitem = null;
    
      promise.then(function (response) {
        if (response) {
          UserPreferenceService.savePreference(response, signUpCtrl.user);
          signUpCtrl.successMsg = "Your information has been saved"
        } else {
          signUpCtrl.error = "No such menu number exists";
        }
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
        
    };
  }

})();
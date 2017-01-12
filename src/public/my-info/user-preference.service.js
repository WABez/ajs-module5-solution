(function() {
  "use strict";

  angular.module('common')
  .service('UserPreferenceService', UserPreferenceService);

  
  function UserPreferenceService() {
    var service = this;
    var _preference = null;

    service.savePreference = function(menuItem, user) {
      _preference = new Object();  
      _preference.menuItem = menuItem;
      _preference.user = user;
    };


    service.GetPreference = function() {
      return _preference;
    };
      
    service.getUser = function() {
      return _preference.user;
    };
      
    service.getMenuItem = function() {
      return _preference.menuItem;
    };
  }

})();
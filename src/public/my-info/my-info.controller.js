(function () {
	"use strict";

	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['preference'];
	function MyInfoController(preference) {
		var $myInfoCtrl = this;
		$myInfoCtrl.preference = preference;
	}

})();
"use strict";

(function(){

	angular.module("app").component("fourOFour", {
		templateUrl: "/templates/fourOFour.html",
		controllerAs: "vm",
		bindings: {
			fromErrorPage: "&"
		},
		controller: function(){
			const vm = this;

			vm.leaveHere = function(){
				vm.fromErrorPage();
			}
		}
	});
})();
// See if there is a better component based way

"use strict";

(function(){

	angular.module("app").component("followComponent", {
		templateUrl: "/templates/follow.component.html",
		controllerAs: "vm",
		bindings: {
			follow: "<",
			ersing: "<",
			sendToFollowParent: "&"
		},
		controller: function(){
			const vm = this;

			vm.getNewProfile = function(err, data){
				vm.sendToFollowParent({err: err, data: data});
			}
		}
	});
})();
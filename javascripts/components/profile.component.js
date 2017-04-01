"use strict";

(function(){
	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html",
		controllerAs: "vm",
		controller: function(APIFactory, UserFactory, FollowFactory){
			const vm = this;

			vm.followr = function(){

			};

			vm.followg = function(){

			};

			vm.repoMan = function(){

			};

			vm.$onInit = function(){
				vm.user = UserFactory.getUser();
			};
		}
	});
})();
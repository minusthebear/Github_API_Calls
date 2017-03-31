"use strict";

(function(){
	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html",
		controllerAs: "vm",
		controller: function(APIFactory, UserFactory, $stateParams){
			const vm = this;


			vm.$onInit = function(){
				APIFactory.getAPI().then(function(res){
					console.log($stateParams.userData);
					//vm.user = new UserFactory.User(res);
				})
				.catch(function(err){
					console.log(err);
				});
			};
		}
	});
})();
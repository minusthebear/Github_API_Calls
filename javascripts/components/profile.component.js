"use strict";

(function(){
	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html",
		controllerAs: "vm",
		controller: function(APIFactory, UserFactory){
			const vm = this;


			vm.$onInit = function(){
				APIFactory.getAPI().then(function(res){
					vm.user = new UserFactory.User(res);
				})
				.catch(function(err){
					console.log(err);
				});
			};
		}
	});
})();
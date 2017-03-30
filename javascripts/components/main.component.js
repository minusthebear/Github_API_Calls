"use strict";

(function(){
	angular.module("app").component("mainComponent", {
		templateUrl: "/templates/main.component.html",
		controllerAs: "vm",
		controller: function(APIFactory){
			const vm = this;

			vm.$onInit = function(){
				APIFactory.getAPI().then(function(res){
					vm.user = res.data;
				})
				.catch(function(err){
					console.log(err);
				});
			};
		}
	});
})();
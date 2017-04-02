"use strict";

(function(){

	angular.module("app").component("mainComponent", {
		templateUrl: "/templates/main.component.html",
		controllerAs: "vm",
		controller: function(){
			const vm = this;

			vm.initSearch = function(){
				allFalse(vm);
			}

			vm.onSearch = function(errorData, userData){
				allFalse(vm);
				if(errorData){
					vm.error = errorData;
					vm.errorBoxVisible = true;
				
				} else {
					vm.user = userData;
					vm.profileBoxVisible = true;
				}
			}

			vm.$onChanges = function(){
				console.log(vm.user);
				vm.user = vm.user;
			}
		}
	});

	function allFalse(vm){
		vm.profileBoxVisible = false;
		vm.errorBoxVisible = false;
	}
})();
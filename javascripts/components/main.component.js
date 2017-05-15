"use strict";

(function(){

	angular.module("app").component("mainComponent", {
		templateUrl: "/templates/main.component.html",
		controllerAs: "vm",
		controller: function($rootScope){
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

			vm.fromErrorPage = function(){
				allFalse(vm);
			}

			vm.$onInit = function(){
				allFalse(vm);
			}

			vm.$onChanges = function(){
				allFalse(vm);
			}
		}
	});

	function allFalse(vm){
		vm.profileBoxVisible = false;
		vm.errorBoxVisible = false;
	}
})();

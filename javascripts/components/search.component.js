"use strict";

(function(){

	angular.module("app").component("searchComponent", {
		templateUrl: "/templates/search.component.html",
		controllerAs: "vm",
		controller: searchComponent,
		bindings: {
			onSearch: "&",
			profileBoxVisible: "<",
			errorBoxVisible: "<"
		}
	});

	function searchComponent(APIFactory, UserFactory, $state){
		const vm = this;
		var result;

		// make setUser and getUser one function

		vm.searchGithub = function(){
			APIFactory.getAPI(vm.searchText).then(function(res){
				res.status !== 200 ? vm.onSearch({errorData: res.data, userData: null }) : (
					result = UserFactory.setUser(res.data),
					vm.onSearch({errorData: null, userData: result})
				);
			})
			.catch(function(err){
				$state.go("fourOFour");
			});
		};

		vm.$onInit = function(){
			
		};

		vm.$onChanges = function(bindings){
			// if(bindings.profileBoxVisible === true)
		}
	}
})();
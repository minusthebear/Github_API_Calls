"use strict";

(function(){

	angular.module("app").component("searchComponent", {
		templateUrl: "/templates/search.component.html",
		controllerAs: "vm",
		controller: searchComponent,
		bindings: {
			onSearch: "&"
		}
	});

	function searchComponent(APIFactory, UserFactory){
		const vm = this;
		var result;

		// make setUser and getUser one function

		vm.searchGithub = function(){
			APIFactory.getAPI(vm.searchText).then(function(res){
				res.status !== 200 ? (
					vm.onSearch({errorData: res.data, userData: null }),
					console.log(res.data)
				) : (
					result = UserFactory.setUser(res.data),
					vm.onSearch({errorData: null, userData: result}),
					console.log("res.data")
				);
			})
			.catch(function(err){
				vm.onSearch({errorData: err, userData: null });
				console.log(err);
			});
		};

		vm.$onInit = function(){
			
		};

		vm.$onChanges = function(){
			
		}
	}
})();
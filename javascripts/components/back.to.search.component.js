"use strict";

(function(){
	angular.module("app").component("backToSearchComponent", {
		templateUrl: "/templates/back.to.search.component.html",
		controllerAs: "vm",
		bindings: {
			initSearch: "&"
		},
		controller: function(){
			const vm = this;

			vm.showSearchBox = function(){
				vm.initSearch({});
			}

		}
	});

})();
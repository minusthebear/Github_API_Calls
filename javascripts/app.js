"use strict";

(function(){
	
	const app = angular.module("app", ["ui.router"]);

	app.config(function($urlRouterProvider, $locationProvider, $stateProvider, $qProvider){
		$locationProvider.html5Mode(true);

		$urlRouterProvider.when("", "/main").when("/", "/main")
			.otherwise(function($injector){
				$injector.get("$state").go("main");
			});

		$stateProvider.state("main", {
			url: "/main",
			component: "mainComponent"
		});
	});

})();

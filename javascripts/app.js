"use strict";

(function(){
	
	const app = angular.module("app", ["ui.router"]);

	app.config(function($urlRouterProvider, $locationProvider, $stateProvider, $qProvider){
		$locationProvider.html5Mode(true);

		/*
			Uncomment below to handle $q.reject() during unit tests
		*/
		// $qProvider.errorOnUnhandledRejections(false);

		$urlRouterProvider.when("", "/main").when("/", "/main")
			.otherwise(function($injector){
				$injector.get("$state").go("404", {}, {location: false});
			});

		$stateProvider.state("main", {
			url: "/main",
			component: "mainComponent"
		})
		.state("profile", {
			url: "/profile",
			component: "profileComponent",
			params: { userData: null }
		})
		.state("404", {
			url: "/fourOFour",
			component: "fourOFour",
			params: { errorData: null }
		});
	});

})();
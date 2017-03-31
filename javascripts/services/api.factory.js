"use strict";

(function(){

	angular.module("app").factory("APIFactory", function($http){
		const APIFactory = {};
		const addy = "https://api.github.com/users/";

		APIFactory.getAPI = function(x){
			console.log(addy + x);
			return $http.get(addy + x).then(function success(res){
				console.log("success!");
				return res;
			}, function errorHandle(res){
				console.log("failure!");
				return res;
			});
		};

		return APIFactory;

	});
})();
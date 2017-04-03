"use strict";

(function(){

	angular.module("app").factory("APIFactory", function($http){
		const APIFactory = {};
		const addy = "https://api.github.com/users/";

		APIFactory.getAPI = function(x){
			return $http.get(addy + x).then(function success(res){
				return res;
			}, function errorHandle(res){
				return res;
			});
		};

		return APIFactory;

	});
})();
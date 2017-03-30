"use strict";

(function(){

	angular.module("app").factory("APIFactory", function($http){
		var APIFactory = {};

		APIFactory.getAPI = function(){
			return $http.get("https://api.github.com/users/minusthebear").success(function(res){
				return res.data;
			}).catch(function(err){
				console.log(err);
			});
		};

		return APIFactory;
/*
		
*/

	});
})();
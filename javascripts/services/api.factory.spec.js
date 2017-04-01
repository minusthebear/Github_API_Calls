"use strict";

// Add error handling checks soon

describe("API Factory", function(){

	var APIFactory, $httpBackend, $q, $provide, $rootScope, result;

	const addy = "https://api.github.com/users/minusthebear";

	const RESPONSE_ERROR = {
		"message": "Not Found",
		"documentation_url": "https://developer.github.com/v3"
	};

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_APIFactory_, _$httpBackend_, _$q_, _$rootScope_){
		APIFactory = _APIFactory_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		$rootScope = _$rootScope_;
		$rootScope.$new();
	}));

	afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

	describe("API Factory should be defined", function(){

		it("API Factory should be defined", function(){
			expect(APIFactory).toBeDefined();
		});

	});

	describe("API Factory's Methods", function(){
		var spy, result;

		beforeEach(function(){
			spyOn(APIFactory, "getAPI");
			result = {};
		});

		it("API Factory's methods should be defined", function(){
			expect(APIFactory.getAPI).toBeDefined();
			expect(APIFactory.getAPI).not.toHaveBeenCalled();
		});

		describe("APIFactory.getAPI() is called", function(){
			it("API Factory should have been called", function(){
				let API = APIFactory.getAPI();

				expect(APIFactory.getAPI).toHaveBeenCalled();
				$rootScope.$apply();
			});
		});
	});


	describe("APIFactory should return some values", function(){
		var spy, result;

		beforeEach(function(){
			spyOn(APIFactory, "getAPI").and.callThrough();
			result = {};
		});

		it("should make an API call and return the correct value", inject(function($http){
			$httpBackend.whenGET(addy).respond(200, {"id": 8847098});

			expect(APIFactory.getAPI).not.toHaveBeenCalled();
			expect(result).toEqual({});

			APIFactory.getAPI("minusthebear").then(function(res){
				result = res;
			});

			$httpBackend.flush();

			expect(APIFactory.getAPI).toHaveBeenCalled();
			expect(result.data.id).toEqual(8847098);
		}));

		it("should return Not Found message with invalid user", function(){
			$httpBackend.whenGET("https://api.github.com/users/ffeqfenqfewqoio")
				.respond(404, RESPONSE_ERROR);

			expect(APIFactory.getAPI).not.toHaveBeenCalled();
			expect(result).toEqual({});

			APIFactory.getAPI("ffeqfenqfewqoio").then(function(res){
				result = res;
			}).catch(function(res){
				result = res;
			});

			$httpBackend.flush();

			expect(result.data).toEqual(RESPONSE_ERROR);
		});

	});

	const RESPONSE_SUCCESS = {
		"login": "minusthebear",
		"id": 8847098,
		"avatar_url": "https://avatars1.githubusercontent.com/u/8847098?v=3",
		"html_url": "https://github.com/minusthebear",
		"followers_url": "https://api.github.com/users/minusthebear/followers",
		"following_url": "https://api.github.com/users/minusthebear/following{/other_user}",
		"subscriptions_url": "https://api.github.com/users/minusthebear/subscriptions",
		"organizations_url": "https://api.github.com/users/minusthebear/orgs",
		"repos_url": "https://api.github.com/users/minusthebear/repos",
		"name": null,
		"company": null,
		"blog": null,
		"location": null,
		"email": null,
		"bio": null,
		"public_repos": 14,
		"public_gists": 0,
		"followers": 1,
		"following": 1,
		"created_at": "2014-09-21T01:35:11Z",
		"updated_at": "2017-02-03T20:12:43Z"
	};

});
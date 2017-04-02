"use strict";

describe("searchComponent", function(){
	var componentController, searchComponent, APIFactory, UserFactory, $rootScope, $httpBackend, $q, bindings, onSearchSpy;

	const APIFactoryMock = {};

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_APIFactory_, _UserFactory_, _$httpBackend_, _$q_, _$rootScope_, _$componentController_){
		APIFactory = _APIFactory_;
		UserFactory = _UserFactory_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		$rootScope = _$rootScope_;
		$rootScope.$new();
		componentController = _$componentController_;
	}));

	describe("searchComponent should work properly", function(){
		beforeEach(function(){
			onSearchSpy = jasmine.createSpy("onSearch");
			bindings = { onSearch: onSearchSpy };
			searchComponent = componentController("searchComponent", { $scope: {} }, bindings);
			spyOn(APIFactory, "getAPI").and.callThrough();;
			
			APIFactoryMock.getAPI = function(){
				var p = $q.defer();
				p.resolve(RESPONSE_SUCCESS);
				return p.promise;
			};
		});

		it("searchComponent should be defined", function(){
			expect(searchComponent).toBeDefined();
			expect(searchComponent.searchGithub).toBeDefined();
		});

		it("should make an API call", function(){
			searchComponent.searchText = "minusthebear";
			expect(APIFactory.getAPI).not.toHaveBeenCalled();

			searchComponent.searchGithub();
			expect(APIFactory.getAPI).toHaveBeenCalled();
			expect(APIFactory.getAPI).toHaveBeenCalledWith(searchComponent.searchText);
		});

		it("should return data and trigger onSearch", function(done){
			var result;
			APIFactoryMock.getAPI().then(function(res){
				result = UserFactory.setUser(RESPONSE_SUCCESS.data);
				searchComponent.onSearch({errorData: null, data: result});
				expect(result.login).toEqual(RESPONSE_SUCCESS.data.login);
				expect(onSearchSpy).toHaveBeenCalledWith({errorData: null, data: result});
				done();
			});
			$rootScope.$digest();
		});
	});

	describe("onSearch should be triggered with error", function(){
		beforeEach(function(){
			onSearchSpy = jasmine.createSpy("onSearch");
			bindings = { onSearch: onSearchSpy };
			searchComponent = componentController("searchComponent", { $scope: {} }, bindings);
			
			APIFactoryMock.failedGetAPI = function(){
				var p = $q.defer();
				p.reject(RESPONSE_ERROR);
				return p.promise;
			};
		});


		it("should return data and trigger onSearch", function(done){
			var result;
			APIFactoryMock.failedGetAPI().catch(function(res){
				result = res;
				searchComponent.onSearch({errorData: result, data: null});
				expect(result).toEqual(RESPONSE_ERROR);
				expect(onSearchSpy).toHaveBeenCalledWith({errorData: result, data: null});
				done();
			});
			$rootScope.$digest();
		});
	});
});





const RESPONSE_SUCCESS = {
	status: 200,
	data: {
		"login": "minusthebear",
		"id": 8847098,
		"avatar_url": "https://avatars1.githubusercontent.com/u/8847098?v=3",
		"html_url": "https://github.com/minusthebear",
		"followers_url": "https://api.github.com/users/minusthebear/followers",
		"following_url": "https://api.github.com/users/minusthebear/following{/other_user}",
		"repos_url": "https://api.github.com/users/minusthebear/repos",
		"name": null,
		"company": null,
		"blog": null,
		"location": null,
		"email": null,
		"bio": null,
		"public_repos": 14,
		"followers": 1,
		"following": 1,
		"created_at": "2014-09-21T01:35:11Z",
		"updated_at": "2017-02-03T20:12:43Z"			
	}
};

const RESPONSE_ERROR = {
	"message": "Not Found",
	"documentation_url": "https://developer.github.com/v3"
};

/*
		it("should have a search method called searchGithub()", function(){
			expect(mainComponent.searchGithub).toBeDefined();
		});
*/
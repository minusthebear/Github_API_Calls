"use strict";

describe("searchComponent", function(){
	var componentController, searchComponent, APIFactory, UserFactory, $httpBackend, $q, bindings, onSearchMock;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_APIFactory_, _UserFactory_, _$httpBackend_, _$q_, _$rootScope_, _$componentController_){
		APIFactory = _APIFactory_;
		UserFactory = _UserFactory_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		_$rootScope_.$new();
		componentController = _$componentController_;
	}));

	describe("searchComponent should work properly", function(){
		beforeEach(function(){
			onSearchMock = jasmine.createSpy("onSearch");
			bindings = { onSearch: onSearchMock };
			searchComponent = componentController("searchComponent", { $scope: {} }, bindings);
			spyOn(APIFactory, "getAPI").and.callThrough();;
		});

		it("searchComponent should be defined", function(){
			expect(searchComponent).toBeDefined();
			expect(searchComponent.searchGithub).toBeDefined();
		});

		it("should make an API call and return data", function(){
			searchComponent.searchText = "minusthebear";
			expect(APIFactory.getAPI).not.toHaveBeenCalled();

			searchComponent.searchGithub();
			expect(APIFactory.getAPI).toHaveBeenCalled();
			expect(APIFactory.getAPI).toHaveBeenCalledWith(searchComponent.searchText);
		});
	});
});


const UserFactoryMock = {};

UserFactoryMock.setUser = function(data){
	let obj = {login: data.login};
    var p = $q.defer();
    p.resolve(obj);
    return p.promise;
};

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


/*
		it("should have a search method called searchGithub()", function(){
			expect(mainComponent.searchGithub).toBeDefined();
		});
*/
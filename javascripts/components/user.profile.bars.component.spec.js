"use strict"; 

describe("User Profile Bars Component", function(){
	
	var userProfileBars, UserFactory, $q, user, getNewProfileSpy, result, bindings, $rootScope;
	const APIFactoryMock = {};

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$q_, _$rootScope_, _UserFactory_, _$componentController_){
		$q = _$q_;
		$rootScope = _$rootScope_;
		UserFactory = _UserFactory_;
		user = { login: "minusthebear" };
		getNewProfileSpy = jasmine.createSpy("getNewProfile");
		bindings = { user: user, getNewProfile: getNewProfileSpy };
		userProfileBars = _$componentController_("userProfileBars", { $scope: {} }, bindings);
		$rootScope.$new();
	}));

	describe("userProfileBars default values", function(){
		beforeEach(function(){
			APIFactoryMock.getAPI = function(){
				var p = $q.defer();
				p.resolve(RESPONSE_SUCCESS);
				return p.promise;
			};
		});

		it("userProfileBars and all default values are defined and set", function(){
			expect(userProfileBars).toBeDefined();
			expect(userProfileBars.goToProfile).toBeDefined();
			expect(userProfileBars.user.login).toEqual("minusthebear");
			expect(UserFactory).toBeDefined();
			expect(getNewProfileSpy).not.toHaveBeenCalled();
		});

		it("getNewProfile should make a call to sendToFollowParent", function(done){
			
			APIFactoryMock.getAPI().then(function(res){
				result = UserFactory.setUser(RESPONSE_SUCCESS.data);
				userProfileBars.getNewProfile({errorData: null, data: result});
				expect(result.login).toEqual(RESPONSE_SUCCESS.data.login);
				expect(getNewProfileSpy).toHaveBeenCalledWith({errorData: null, data: result});
				done();
			});
			$rootScope.$digest();			
		});
	});

	describe("failed API call", function(){
		beforeEach(function(){
			APIFactoryMock.failedGetAPI = function(){
				var d = $q.defer();
				d.reject(RESPONSE_ERROR);
				return d.promise;
			}
		});

		it("Upon a 404 call catch the error", function(done){
			
			APIFactoryMock.failedGetAPI().catch(function(res){
				result = res;
				userProfileBars.getNewProfile({errorData: result, data: null});
				expect(result).toEqual(RESPONSE_ERROR);
				expect(getNewProfileSpy).toHaveBeenCalledWith({errorData: result, data: null});
				done();
			});
			$rootScope.$digest();
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
});


"use strict";

describe("Profile User Component", function(){

    const addy = "https://api.github.com/users/";
    const APIFactoryMock = {};
	var profileUserComponent, $q, $rootScope, APIFactory, FollowFactory, UserFactory, userDetails, onFollowSpy, bindings;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_FollowFactory_, _UserFactory_,  _$q_, _$rootScope_, _$componentController_){
		FollowFactory = _FollowFactory_;
		UserFactory = _UserFactory_;
		$q = _$q_;
		onFollowSpy = jasmine.createSpy("onFollow");
		userDetails = following.data;
		bindings = { onFollow: onFollowSpy, userDetails: userDetails };
        profileUserComponent = _$componentController_("profileUserComponent", { $scope: {} }, bindings);
		$rootScope = _$rootScope_;
		$rootScope.$new();
	}));

	describe("profileUserComponent should exist", function(){
		it("profileUserComponent should exist and its default values set", function(){
			expect(profileUserComponent).toBeDefined();
			expect(profileUserComponent.followr).toBeDefined();
			expect(profileUserComponent.followg).toBeDefined();
			expect(onFollowSpy).not.toHaveBeenCalled();
			expect(profileUserComponent.userDetails).toEqual(following.data);
		});
	});

	describe("followr and followg methods", function(){
		var result;

		beforeEach(function(){
			APIFactoryMock.getAPI = function(){
				var d = $q.defer();
				d.resolve(following);
				return d.promise;
			}
		});

		// both functions perform the same task
		it("should make a call to followers/following", function(done){
			APIFactoryMock.getAPI().then(function(res){
				res.status !== 200 ? profileUserComponent.onFollow({err: res.data, data: null, follow: null}) : (
					result = FollowFactory.setFollowers(res.data),
					profileUserComponent.onFollow({err: null, data: result, follow: "followers"})
				);
				expect(result.login).toEqual(following.data.login);
				expect(onFollowSpy).toHaveBeenCalledWith({err: null, data: result, follow: "followers"});
				done();
			});
			$rootScope.$apply();
		});
	});

	describe("failing followr and followg methods", function(){
		var result;

		beforeEach(function(){
			APIFactoryMock.failedGetAPI = function(){
				var d = $q.defer();
				d.reject(RESPONSE_ERROR);
				return d.promise;
			}
		});

		// both functions perform the same task
		it("should make a call to followers/following", function(done){
			APIFactoryMock.failedGetAPI().catch(function(res){
				res.status !== 200 ? profileUserComponent.onFollow({err: res, data: null, follow: null}) : (
					result = FollowFactory.setFollowers(res.data),
					profileUserComponent.onFollow({err: null, data: result, follow: "followers"})
				);
				expect(onFollowSpy).toHaveBeenCalledWith({err: RESPONSE_ERROR, data: null, follow: null});
				done();
			});
			$rootScope.$apply();
		});
	});


	const RESPONSE_SUCCESS = {
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
		};

	const RESPONSE_ERROR = {
		"message": "Not Found",
		"documentation_url": "https://developer.github.com/v3"
	};

	const following = {
	    status: 200,
	    data: [
	      {
	        "login": "caoabunga",
	        "id": 3313366,
	        "avatar_url": "https://avatars2.githubusercontent.com/u/3313366?v=3",
	        "gravatar_id": "",
	        "url": "https://api.github.com/users/caoabunga",
	        "html_url": "https://github.com/caoabunga",
	        "followers_url": "https://api.github.com/users/caoabunga/followers",
	        "following_url": "https://api.github.com/users/caoabunga/following{/other_user}",
	        "gists_url": "https://api.github.com/users/caoabunga/gists{/gist_id}",
	        "starred_url": "https://api.github.com/users/caoabunga/starred{/owner}{/repo}",
	        "subscriptions_url": "https://api.github.com/users/caoabunga/subscriptions",
	        "organizations_url": "https://api.github.com/users/caoabunga/orgs",
	        "repos_url": "https://api.github.com/users/caoabunga/repos",
	        "events_url": "https://api.github.com/users/caoabunga/events{/privacy}",
	        "received_events_url": "https://api.github.com/users/caoabunga/received_events",
	        "type": "User",
	        "site_admin": false
	      }
	    ]
	};


});

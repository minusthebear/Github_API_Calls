// "use strict";

describe("User Factory", function(){
	var UserFactory;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_UserFactory_){
		UserFactory = _UserFactory_;
	}));

	it("UserFactory and its methods should be defined", function(){
		expect(UserFactory).toBeDefined();
		expect(UserFactory.User).not.toBeDefined();
		expect(UserFactory.setUser).toBeDefined();
		expect(UserFactory.getUser).toBeDefined();
	});

	it("should set User and return User", function(){
		expect(UserFactory.User).not.toEqual(RESPONSE_SUCCESS.data);
		
		UserFactory.setUser(RESPONSE_SUCCESS.data);
		
		expect(UserFactory.User.id).toEqual(RESPONSE_SUCCESS.data.id);
		expect(UserFactory.User.links.followers_url).toEqual(UserFactory.User.links.followers_url);
	});

	it("should take data and return the correct value", function(){
		UserFactory.setUser(RESPONSE_SUCCESS.data);
		let x = UserFactory.getUser();
		expect(x.id).toEqual(8847098);
		expect(x.links.followers_url).toEqual("https://api.github.com/users/minusthebear/followers");
	});

	it("should give invalid value undefined", function(){
		delete RESPONSE_SUCCESS.data.login;
		UserFactory.setUser(RESPONSE_SUCCESS.data);
		let x = UserFactory.getUser(RESPONSE_SUCCESS.data);
		expect(x.login).toEqual(undefined);
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

});
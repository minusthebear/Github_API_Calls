"use strict";

describe("Follow Component", function(){

	var followComponent, sendToFollowParentSpy, follow, ersing, bindings,
		login = { login: "minusthebear" };

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$componentController_){
		sendToFollowParentSpy = jasmine.createSpy("sendToFollowParent");
		follow = login;
		ersing = "following";
		bindings = { sendToFollowParent: sendToFollowParentSpy, follow: follow, ersing: ersing };
		followComponent = _$componentController_("followComponent" , { $scope: {} }, bindings);
	}));

	it("followComponent should exist and have default state", function(){
		expect(followComponent).toBeDefined();
		expect(followComponent.getNewProfile).toBeDefined();
		expect(followComponent.ersing).toEqual(ersing);
		expect(followComponent.follow).toEqual(follow);
		expect(sendToFollowParentSpy).not.toHaveBeenCalled();
	});

	it("getNewProfile should make a call to sendToFollowParent", function(){
		followComponent.getNewProfile(null, login);
		expect(sendToFollowParentSpy).toHaveBeenCalledWith({err: null, data: login});
	});
});
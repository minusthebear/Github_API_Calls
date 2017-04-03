"use strict";

describe("Profile Component", function(){
	var profileComponent, componentController, APIFactory, UserFactory, FollowFactory, 
		$httpBackend, $q, $rootScope, bindings, userSpy, newProfileSpy,
		login = { login: "minusthebear" };

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$componentController_, _$httpBackend_, _$q_, _$rootScope_, _UserFactory_, _FollowFactory_){
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		$rootScope = _$rootScope_;
		$rootScope.$new();
		UserFactory = _UserFactory_;
		FollowFactory = _FollowFactory_;
		
		userSpy = login;
		newProfileSpy = jasmine.createSpy("newProfile");
		bindings = { user: userSpy, newProfile: newProfileSpy };
		profileComponent = _$componentController_("profileComponent", { $scope: {} }, bindings);
	
	}));

	describe("Profile Component initiation", function(){
		it("everything should be defined and spies should not have been called", function(){
			expect(profileComponent).toBeDefined();
			expect(profileComponent.sendToFollowParent).toBeDefined();
			expect(profileComponent.onFollow).toBeDefined();
			expect(profileComponent.user.login).toEqual(login.login);
			expect(newProfileSpy).not.toHaveBeenCalled();
			expect(profileComponent.showFollow).not.toBeDefined();
			expect(profileComponent.showProfile).not.toBeDefined();
		});
	});

	describe("profileComponent sendToFollowParent", function(){
		it("sendToFollowParent should work properly", function(){
			expect(newProfileSpy).not.toHaveBeenCalled();
			let newValues = { login: "fakeValue", id: 8765309 };
			profileComponent.sendToFollowParent(null, newValues);

			expect(newProfileSpy).toHaveBeenCalledWith({err: null, data: newValues});
			expect(profileComponent.showFollow).toBe(false);
			expect(profileComponent.showProfile).toBe(false);
		});
	});
});

function allFalse(vm){
	vm.showFollow = false;
	vm.showProfile = false;
}
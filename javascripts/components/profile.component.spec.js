"use strict";

describe("Profile Component", function(){

	var profileComponent, $httpBackend, $q, bindings;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$httpBackend_, _$q_, _$rootScope_){
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		_$rootScope_.$new();
	}));


	describe("profileComponent should exist", function(){
		beforeEach(inject(function(_$componentController_){
			profileComponent = _$componentController_("profileComponent", { $scope: {} });
		}));

		it("profileComponent should exist", function(){
			expect(profileComponent).toBeDefined();
		});
	});

/*
	describe("Making an API call to Github", function(){

		beforeEach(inject(function(_$componentController_){
			profileComponent = _$componentController_("profileComponent", { $scope: {} });
		}));
		
		it("$onInit should init and receive a response", function(){
			 console.log("Hey where the fuck are you?");
			expect(profileComponent.$onInit).not.toHaveBeenCalled();

			$httpBackend.whenGET(addy).respond(200 , {"id": 8847098});
			
			profileComponent.$onInit();
			$httpBackend.flush();

			expect(profileComponent.response).toBeDefined();

		});
	});
*/
});
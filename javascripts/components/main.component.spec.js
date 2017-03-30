"use strict";

describe("Main Component", function(){

	var mainComponent, $httpBackend, $q, bindings;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$httpBackend_, _$q_, _$rootScope_){
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		_$rootScope_.$new();
	}));


	describe("mainComponent should exist", function(){
		beforeEach(inject(function(_$componentController_){
			mainComponent = _$componentController_("mainComponent", { $scope: {} });
		}));

		it("mainComponent should exist", function(){
			expect(mainComponent).toBeDefined();
		});
	});

/*
	describe("Making an API call to Github", function(){

		beforeEach(inject(function(_$componentController_){
			mainComponent = _$componentController_("mainComponent", { $scope: {} });
		}));
		
		it("$onInit should init and receive a response", function(){
			 console.log("Hey where the fuck are you?");
			expect(mainComponent.$onInit).not.toHaveBeenCalled();

			$httpBackend.whenGET(addy).respond(200 , {"id": 8847098});
			
			mainComponent.$onInit();
			$httpBackend.flush();

			expect(mainComponent.response).toBeDefined();

		});
	});
*/
});
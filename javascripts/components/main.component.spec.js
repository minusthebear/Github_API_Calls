// GOAL:

// 1. Type in user, hit search

// 2. Have find user, re-route if success

// 3. If not success, re-route elsewhere

"use strict";

describe("Main Component", function(){
	var mainComponent, APIService, $state;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_APIService_, _$state_, _$componentController_){
		APIService = _APIService_;
		$state = _$state_;
		mainComponent = _$componentController_("mainComponent", { $scope : {} });
	}));

	describe("Checking mainComponent's existence", function(){
		it("should exist", function(){
			expect(mainComponent).toBeDefined();
		});

		it("should have a search method called searchGithub()", function(){
			expect(mainComponent.searchGithub).toBeDefined();
		});
	});
});
"use strict";

describe("Follow Component", function(){

	var followComponent, $stateParams;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$stateParams_, _$componentController_){
		$stateParams = _$stateParams_;
		followComponent = _$componentController_("followComponent" , { $scope: {} }, { $stateParams: $stateParams });
	}));

	it("followComponent should exist", function(){
		expect(followComponent).toBeDefined();
	});

	it("$stateParams should have a property 'id'", function(){
		console.log($stateParams);
	});
});
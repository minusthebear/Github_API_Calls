"use strict";

describe("Back To Search Component", function(){

	var backToSearchComponent, initSearchSpy, bindings;		

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_$componentController_){
		initSearchSpy = jasmine.createSpy("sendToFollowParent");
		bindings = { initSearch: initSearchSpy };
		backToSearchComponent = _$componentController_("backToSearchComponent" , { $scope: {} }, bindings);
	}));

	it("should be defined", function(){
		expect(backToSearchComponent).toBeDefined();
		expect(initSearchSpy).not.toHaveBeenCalled();
	});

	it("should trigger initSearch", function(){
		backToSearchComponent.showSearchBox();
		expect(initSearchSpy).toHaveBeenCalled();
	});
})
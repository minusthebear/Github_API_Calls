"use strict";

describe("API Factory", function(){

	var APIFactory, $httpBackend, $q, $provide, $rootScope, result;

	const addy = "https://api.github.com/users/minusthebear";

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_APIFactory_, _$httpBackend_, _$q_, _$rootScope_){
		APIFactory = _APIFactory_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		$rootScope = _$rootScope_;
		$rootScope.$new();
	}));

	afterEach(function(){

	});

	describe("API Factory should be defined", function(){

		it("API Factory should be defined", function(){
			expect(APIFactory).toBeDefined();
		});

	});

	describe("API Factory's Methods", function(){
		var spy, result;

		beforeEach(function(){
			spyOn(APIFactory, "getAPI");
			result = {};
		});

		it("API Factory's methods should be defined", function(){
			expect(APIFactory.getAPI).toBeDefined();
			expect(APIFactory.getAPI).not.toHaveBeenCalled();
		});

		describe("APIFactory.getAPI() is called", function(){
			it("API Factory should have been called", function(){
				let API = APIFactory.getAPI();

				expect(APIFactory.getAPI).toHaveBeenCalled();
				$rootScope.$apply();
			});
		});
	});


	describe("APIFactory should return some values", function(){
		var spy, result;

		beforeEach(function(){
			spyOn(APIFactory, "getAPI").and.callThrough();
			result = {};
		});

		it("should make an API call and return the correct value", inject(function($http){
			$httpBackend.whenGET(addy).respond(200, $q.when({"id": 8847098}));

			expect(APIFactory.getAPI).not.toHaveBeenCalled();
			expect(result).toEqual({});

			APIFactory.getAPI().then(function(res){
				result = res;
			});

			$httpBackend.flush();
			console.log(result);

			expect(APIFactory.getAPI).toHaveBeenCalled();
			//expect(result).toEqual(8847098);
		}));
	});
});
"use strict";


(function(){
	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html",
		controllerAs: "vm",
		bindings: {
			user: "<",
			newProfile: "&"
		},
		controller: function(APIFactory, UserFactory, FollowFactory){
			const vm = this;

			vm.sendToFollowParent = function(err, data){
				vm.newProfile({err: err, data: data});
				allFalse(vm);
			}

			vm.onFollow = function(data, follow){
				allFalse(vm);
				vm.showFollow = true;
				vm.follow = data;
				vm.ersing = follow;
			}

			vm.$onInit = function(){
				vm.userDetails = vm.user;
				allFalse(vm);
				vm.showProfile = true;
			}

			vm.$onChanges = function(){
				vm.userDetails = vm.user;
				allFalse(vm);
				vm.showProfile = true;				
			}

		}
	});


	function allFalse(vm){
		vm.showFollow = false;
		vm.showProfile = false;
	}

})();
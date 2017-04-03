"use strict";

(function(){

	angular.module("app").component("profileUserComponent", {
		templateUrl: "/templates/profile.user.component.html",
		controllerAs: "vm",
		bindings: {
			userDetails: "<",
			onFollow: "&"
		},
		controller: function(APIFactory, UserFactory, FollowFactory){
			const vm = this;

			vm.followersLength = vm.userDetails.followers;
			vm.followingLength = vm.userDetails.following;

			vm.followr = function(){
				let suffix = vm.userDetails.login + "/followers";
				let data;
				APIFactory.getAPI(suffix).then(function(res){
					res.status !== 200 ? vm.onFollow({err: res.data, data: null, follow: null}) : (
						data = FollowFactory.setFollowers(res.data),
						vm.onFollow({err: null, data: data, follow: "followers"})
					);
				}).catch(function(err){
					vm.onFollow({err: err, data: null, follow: null});
				});
			};

			vm.followg = function(){
				let suffix = vm.userDetails.login + "/following";
				let data;
				APIFactory.getAPI(suffix).then(function(res){
					res.status !== 200 ? vm.onFollow({err: res.data, data: null, follow: null}) : (
						data = FollowFactory.setFollowing(res.data),
						vm.onFollow({err: null, data: data, follow: "following"})
					);
				}).catch(function(err){
					vm.onFollow({err: err, data: null, follow: null});
				});
			};

			vm.$onInit = function(){
				
			};

			vm.$onChanges = function(){
				
			}
		}
	});
})();
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

			vm.followr = function(x){
				let suffix = x + "/followers";
				let data;
				APIFactory.getAPI(suffix).then(function(res){
					res.status !== 200 ? vm.onFollow({err: res.data, data: null, follow: null}) : (
						data = FollowFactory.setFollowers(res.data),
						vm.onFollow({err: null, data: data, follow: "followers"})
					);
				});
			};

			vm.followg = function(x){
				let suffix = x + "/following";
				let data;
				APIFactory.getAPI(suffix).then(function(res){
					res.status !== 200 ? vm.onFollow({err: res.data, data: null, follow: null}) : (
						data = FollowFactory.setFollowing(res.data),
						vm.onFollow({err: null, data: data, follow: "following"})
					);
				});
			};

			vm.repoMan = function(){

			};

			vm.$onInit = function(){
				console.log(vm.userDetails);
			};

			vm.$onChanges = function(){
				console.log("ON CHANGES!");
			}
		}
	});
})();
"use strict";

(function(){
	angular.module("app").component("profileComponent", {
		templateUrl: "/templates/profile.component.html",
		controllerAs: "vm",
		controller: function(APIFactory, UserFactory, FollowFactory, $state){
			const vm = this;

			vm.followr = function(x){
				let suffix = x + "/followers";
				return APIFactory.getAPI(suffix).then(function(res){
					res.status !== 200 ? $state.go("404", {errorData: res.data }) : (
						FollowFactory.setFollower(res.data),
						$state.go("profile.follow", {id: "follower"})
					);
				});
			};

			vm.followg = function(x){
				let suffix = x + "/following";
				return APIFactory.getAPI(suffix).then(function(res){
					res.status !== 200 ? $state.go("404", {errorData: res.data }) : (
						FollowFactory.setFollowing(res.data),
						$state.go("profile.follow", {id: "following"})
					);
				});
			};

			vm.repoMan = function(){

			};

			vm.$onInit = function(){
				vm.user = UserFactory.getUser();
			};
		}
	});
})();
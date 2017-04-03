"use strict";

(function(){

	angular.module("app").component("userProfileBars", {
		templateUrl: "/templates/user.profile.bars.component.html",
		bindings: {
			user: "<",
			getNewProfile: "&"
		},
		controllerAs: "vm",
		controller: function(APIFactory, UserFactory){
			const vm = this;

			vm.goToProfile = function(){
				let data;
				APIFactory.getAPI(vm.user.login).then(function(res){
					res.status !== 200 ? vm.getNewProfile({err: res.data, data: null }) : (
						data = UserFactory.setUser(res.data),
						vm.getNewProfile({err: null, data: data })
					);
				})
				.catch(function(err){
					vm.getNewProfile({err: err, data: null });
				});
			}

		}
	});
})();
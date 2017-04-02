"use strict";

(function(){
	
	const Follow = function(data){
		this.login = data.login;
		this.id = data.id;
		this.avatar_url = data.avatar_url;
		this.url = data.url;
		this.html_url = data.html_url;
	};

	angular.module("app").factory("FollowFactory", function(){
		const x = {};

		function organizeAllFollows(data){
			var arr = [];
			for(let d in data){
				let x = new Follow(data[d]);
				arr.push(x);
			}
			return arr;
		}

		x.setFollowers = function(data){
			x.followers = organizeAllFollows(data);
			return x.followers;
		}

		x.setFollowing = function(data){
			x.following = organizeAllFollows(data);
			return x.following;
		}

		return x;
	});
})();

// accua

var f = {
    "login": "caoabunga",
    "id": 3313366,
    "avatar_url": "https://avatars2.githubusercontent.com/u/3313366?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/caoabunga",
    "html_url": "https://github.com/caoabunga",
    "followers_url": "https://api.github.com/users/caoabunga/followers",
    "following_url": "https://api.github.com/users/caoabunga/following{/other_user}",
    "gists_url": "https://api.github.com/users/caoabunga/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/caoabunga/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/caoabunga/subscriptions",
    "organizations_url": "https://api.github.com/users/caoabunga/orgs",
    "repos_url": "https://api.github.com/users/caoabunga/repos",
    "events_url": "https://api.github.com/users/caoabunga/events{/privacy}",
    "received_events_url": "https://api.github.com/users/caoabunga/received_events",
    "type": "User",
    "site_admin": false
  }
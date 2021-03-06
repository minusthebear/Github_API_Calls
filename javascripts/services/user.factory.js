"use strict";


(function(){
	const User = function(data){

		this.login = data.login;
		this.id = data.id;
		this.avatar_url = data.avatar_url;
		this.html_url = data.html_url;
		this.followers = data.followers;
		this.following = data.following;
		this.public_repos = data.public_repos;
		this.created_at = data.created_at;
		this.updated_at = data.updated_at;
		this.name = data.name;
		this.company = data.company;
		this.blog = data.blog;
		this.location = data.location;
		this.bio = data.bio;
		this.hireable = data.hireable;
		this.email = data.email;
		this.links = {
			followers_url: data.followers_url,
			following_url: data.following_url
		}
	};

	angular.module("app").factory("UserFactory", function(){
		const x = {};

		x.setUser = function(data){
			x.User = new User(data);
			return x.User;
		}

		x.getUser = function(){
			return x.User;
		}

		return x;
	});
})();

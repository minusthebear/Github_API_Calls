"use strict";

describe("FollowFactory", function(){
	var FollowFactory;

	beforeEach(angular.mock.module("app"));

	beforeEach(inject(function(_FollowFactory_){
		FollowFactory = _FollowFactory_;
	}));

	it("FollowFactory should be defined", function(){
		expect(FollowFactory).toBeDefined();
	});

	it("should setFollowers and return the correct data", function(){
		var result = FollowFactory.setFollowers(followers);
		expect(result.length).toEqual(8);
		expect(result[0].login).toEqual("erbombla");
	});

});

const followers = [
  {
    "login": "erbombla",
    "id": 20757635,
    "avatar_url": "https://avatars3.githubusercontent.com/u/20757635?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/erbombla",
    "html_url": "https://github.com/erbombla",
    "followers_url": "https://api.github.com/users/erbombla/followers",
    "following_url": "https://api.github.com/users/erbombla/following{/other_user}",
    "gists_url": "https://api.github.com/users/erbombla/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/erbombla/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/erbombla/subscriptions",
    "organizations_url": "https://api.github.com/users/erbombla/orgs",
    "repos_url": "https://api.github.com/users/erbombla/repos",
    "events_url": "https://api.github.com/users/erbombla/events{/privacy}",
    "received_events_url": "https://api.github.com/users/erbombla/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "getrona",
    "id": 22750308,
    "avatar_url": "https://avatars3.githubusercontent.com/u/22750308?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/getrona",
    "html_url": "https://github.com/getrona",
    "followers_url": "https://api.github.com/users/getrona/followers",
    "following_url": "https://api.github.com/users/getrona/following{/other_user}",
    "gists_url": "https://api.github.com/users/getrona/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/getrona/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/getrona/subscriptions",
    "organizations_url": "https://api.github.com/users/getrona/orgs",
    "repos_url": "https://api.github.com/users/getrona/repos",
    "events_url": "https://api.github.com/users/getrona/events{/privacy}",
    "received_events_url": "https://api.github.com/users/getrona/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "meichsteadt",
    "id": 10804031,
    "avatar_url": "https://avatars0.githubusercontent.com/u/10804031?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/meichsteadt",
    "html_url": "https://github.com/meichsteadt",
    "followers_url": "https://api.github.com/users/meichsteadt/followers",
    "following_url": "https://api.github.com/users/meichsteadt/following{/other_user}",
    "gists_url": "https://api.github.com/users/meichsteadt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/meichsteadt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/meichsteadt/subscriptions",
    "organizations_url": "https://api.github.com/users/meichsteadt/orgs",
    "repos_url": "https://api.github.com/users/meichsteadt/repos",
    "events_url": "https://api.github.com/users/meichsteadt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/meichsteadt/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "lucaskeys",
    "id": 18225479,
    "avatar_url": "https://avatars0.githubusercontent.com/u/18225479?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lucaskeys",
    "html_url": "https://github.com/lucaskeys",
    "followers_url": "https://api.github.com/users/lucaskeys/followers",
    "following_url": "https://api.github.com/users/lucaskeys/following{/other_user}",
    "gists_url": "https://api.github.com/users/lucaskeys/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lucaskeys/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lucaskeys/subscriptions",
    "organizations_url": "https://api.github.com/users/lucaskeys/orgs",
    "repos_url": "https://api.github.com/users/lucaskeys/repos",
    "events_url": "https://api.github.com/users/lucaskeys/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lucaskeys/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "ryanpback",
    "id": 20646190,
    "avatar_url": "https://avatars0.githubusercontent.com/u/20646190?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ryanpback",
    "html_url": "https://github.com/ryanpback",
    "followers_url": "https://api.github.com/users/ryanpback/followers",
    "following_url": "https://api.github.com/users/ryanpback/following{/other_user}",
    "gists_url": "https://api.github.com/users/ryanpback/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ryanpback/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ryanpback/subscriptions",
    "organizations_url": "https://api.github.com/users/ryanpback/orgs",
    "repos_url": "https://api.github.com/users/ryanpback/repos",
    "events_url": "https://api.github.com/users/ryanpback/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ryanpback/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "DiegoSPB",
    "id": 7718178,
    "avatar_url": "https://avatars1.githubusercontent.com/u/7718178?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DiegoSPB",
    "html_url": "https://github.com/DiegoSPB",
    "followers_url": "https://api.github.com/users/DiegoSPB/followers",
    "following_url": "https://api.github.com/users/DiegoSPB/following{/other_user}",
    "gists_url": "https://api.github.com/users/DiegoSPB/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DiegoSPB/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DiegoSPB/subscriptions",
    "organizations_url": "https://api.github.com/users/DiegoSPB/orgs",
    "repos_url": "https://api.github.com/users/DiegoSPB/repos",
    "events_url": "https://api.github.com/users/DiegoSPB/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DiegoSPB/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "c1iff",
    "id": 20778079,
    "avatar_url": "https://avatars0.githubusercontent.com/u/20778079?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/c1iff",
    "html_url": "https://github.com/c1iff",
    "followers_url": "https://api.github.com/users/c1iff/followers",
    "following_url": "https://api.github.com/users/c1iff/following{/other_user}",
    "gists_url": "https://api.github.com/users/c1iff/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/c1iff/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/c1iff/subscriptions",
    "organizations_url": "https://api.github.com/users/c1iff/orgs",
    "repos_url": "https://api.github.com/users/c1iff/repos",
    "events_url": "https://api.github.com/users/c1iff/events{/privacy}",
    "received_events_url": "https://api.github.com/users/c1iff/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "JPCodes",
    "id": 7020266,
    "avatar_url": "https://avatars1.githubusercontent.com/u/7020266?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JPCodes",
    "html_url": "https://github.com/JPCodes",
    "followers_url": "https://api.github.com/users/JPCodes/followers",
    "following_url": "https://api.github.com/users/JPCodes/following{/other_user}",
    "gists_url": "https://api.github.com/users/JPCodes/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JPCodes/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JPCodes/subscriptions",
    "organizations_url": "https://api.github.com/users/JPCodes/orgs",
    "repos_url": "https://api.github.com/users/JPCodes/repos",
    "events_url": "https://api.github.com/users/JPCodes/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JPCodes/received_events",
    "type": "User",
    "site_admin": false
  }
];

"use strict";
import ajax from "@fdaciuk/ajax";
import React, { Component } from "react";
import AppContent from "./components/AppContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  getGithubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : "";
    const internalType = type ? `/${type}` : "";
    return `https://api.github.com/users${internalUser}${internalType}`;
  }

  handleSearch(e) {
    const value = e.target.value;
    const KeyCode = e.wich || e.keyCode;
    const ENTER = 13;
    const target = e.target;

    if (KeyCode === ENTER) {
      target.disabled = true;
      ajax()
        .get(this.getGithubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.name,
              login: result.login,
              bio: result.bio,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          });
        })
        .always(() => {
          target.disabled = false;
        });
    }
  }

  getRepos(type) {
    return (e) => {
      const userName = this.state.userInfo.login;
      ajax()
        .get(this.getGithubApiUrl(userName, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url,
            })),
          });
        });
    };
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        rep={this.state.repos}
        star={this.state.starred}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
        handleSearch={(e) => {
          this.handleSearch(e);
        }}
      />
    );
  }
}

export default App;

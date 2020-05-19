"use strict";
import React, { Component } from "react";
import ajax from "@fdaciuk/ajax";

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

  handleSearch(e) {
    const value = e.target.value;
    const KeyCode = e.wich || e.keyCode;
    const ENTER = 13;

    if (KeyCode === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          console.log(result);
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
        });
    }
  }

  getRepos() {
    ajax()
      .get(`https://api.github.com/users/${this.state.userInfo.login}/repos`)
      .then((result) => {
        this.setState({
          repos: result,
        });
      });
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        rep={this.state.repos}
        star={this.state.starred}
        getRepos={() => {
          this.getRepos();
        }}
        handleSearch={(e) => {
          this.handleSearch(e);
        }}
      />
    );
  }
}

export default App;

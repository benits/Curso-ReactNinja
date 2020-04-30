"use strict";
import React, { Component } from "react";

import AppContent from "./components/AppContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: "Matheus Benites",
        login: "benits",
        photo: "https://avatars1.githubusercontent.com/u/39008435?v=4",
        repos: 12,
        followers: 10,
        following: 10,
      },
      repos: [
        {
          name: "Nome do Repositório",
          link: "#",
        },
        {
          name: "Nome do Repositório",
          link: "#",
        },
      ],
      starred: [
        {
          name: "Nome do Repositório",
          link: "#",
        },
        {
          name: "Nome do Repositório",
          link: "#",
        },
      ],
    };
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        rep={this.state.repos}
        star={this.state.starred}
      />
    );
  }
}

export default App;

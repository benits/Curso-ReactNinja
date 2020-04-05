"use strict";
import React, { Component } from "react";

import Button from "./button";
import Square from "./square";
import Timer from "./timer";

class App extends Component {
  constructor() {
    console.log("constructor App");

    super();
    this.state = {
      time: 0,
      showTimer: true,
      color: "orange"
    };
  }
  //Antes de renderizar o componente
  //Executa do lado do servidor e do frontend
  componentWillMount() {
    console.log("componentWillMount App");
  }
  //Depois de renderizar o component
  //Executa somente do lado do frontend
  componentDidMount() {
    console.log("componentDidMount App");
  }
  render() {
    console.log("render App");
    return (
      <div>
        <Square color={this.state.color} />

        {["black", "green", "yellow"].map(color => (
          <Button
            key={color}
            handleClick={() => {
              this.setState({ color });
            }}>
            {color}
          </Button>
        ))}
        {this.state.showTimer && <Timer time={this.state.time} />}
        <button
          onClick={() => {
            this.setState({ showTimer: !this.state.showTimer });
          }}>
          Show / Hide - Timer
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            this.setState({ time: this.state.time + 10 });
          }}>
          Change Props
        </button>
        <Timer time={this.state.time} />
      </div>
    );
  }
}

export default App;

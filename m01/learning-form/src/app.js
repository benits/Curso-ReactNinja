"use strict";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "valor Inicial",
      cheked: false,
      valueSelect: "1"
    };
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={e => {
              this.setState({ value: e.target.value });
            }}
          />
          <label>
            <input
              type="checkbox"
              value="my-check"
              checked={this.state.checked}
              onChange={event => {
                this.setState({});
              }}
            />
            Checkbox
          </label>

          <select
            value={this.state.valueSelect}
            onChange={event => {
              this.setState({ valueSelect: event.target.value });
            }}>
            <option value="1">opção 1</option>
            <option value="2">opção 2</option>
            <option value="3">opção 3</option>
          </select>

          <textarea defaultValue={"textareas\nvalues"} />
        </form>
      </div>
    );
  }
}
export default App;

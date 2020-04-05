"use strict";

import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.timer;
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps Timer", this.props, nextProps);
    this.setState({ time: this.props.time });
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("shouldComponentUpdate  Timer", this.props, nextState);
    return (
      this.props.time === nextState.time || this.props.time !== nextState.time
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate  Timer", this.props, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate  Timer", this.props, prevProps);
  }
  componentDidMount() {
    console.log("start Timer");

    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("stop Timer");

    clearInterval(this.timer);
  }
  render() {
    return <div>Timer: {this.state.time}</div>;
  }
}

export default Timer;

import React, { Component } from "react";
import "./Class.css";

export default class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      number: 2,
    };
    this.increaseHandler = this.increaseHandler.bind(this);
  }

  increaseHandler(e) {
    e.preventDefault();
    this.setState({
      number: this.state.number + 2,
    });
  }

  decreaseHandler = (e) => {
    e.preventDefault();
    this.setState({
      number: this.state.number - 1,
    });
  };
  render() {
    console.log("state changed");
    return (
      <div className="numbers">
        <br />
        <h1>ClassCounter {this.state.number}</h1>
        <br />
        <button onClick={this.increaseHandler}>increase</button>
        <button onClick={this.decreaseHandler}>decrease</button>
      </div>
    );
  }
}

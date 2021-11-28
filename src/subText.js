import React, { Component } from "react";

export default class SubText extends Component {
  render() {
    return (
      <span className="input__subtext mess__text">
        Counter value : {this.props.value}
      </span>
    );
  }
}

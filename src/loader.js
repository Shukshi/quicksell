import React, { Component } from "react";
import Loading from "./assets/loader.svg";
export default class Loader extends Component {
  state = {
    value: 1,
  };
  render() {
    return (
      <React.Fragment>
        <div className="loading__icon">
          <img src={Loading} alt="" height="16px" />
        </div>
        <span className="input__pretext mess__text">Saving counter value</span>
      </React.Fragment>
    );
  }
}

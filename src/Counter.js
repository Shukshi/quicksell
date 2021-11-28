import React, { Component } from "react";
import "./Counter.css";
import Loader from "./loader";
import SubText from "./subText";
export default class Counter extends Component {
  state = {
    value: 1,
    max: 1000,
    loader: false,
  };
  async getValue() {
    const response = await fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
    );
    const data = await response.json();
    if (data !== null) {
      this.setState({ value: data });
    }
  }
  async postData() {
    this.setState({
      loader: true,
    });
    console.log("PostingVal");
    var url =
      " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ shukshiRaj: this.state.value }),
    });
    this.setState({
      loader: false,
    });
    console.log("Posted");
    return response.json();
  }

  async componentDidMount() {
    this.setState({ max: process.env.REACT_APP_MAX_VALUE });
    console.log(process.env.REACT_APP_MAX_VALUE);
    this.getValue();
  }

  decreaseVal() {
    var val = this.state.value - 1;
    this.setState({
      value: val,
    });
    this.postData();
  }
  increaseVal() {
    var val = this.state.value;
    val++;
    if (val > this.state.max) {
      val = this.state.max;
    }
    this.setState({
      value: val,
    });
    this.postData();
  }
  handleChange(event) {
    var val = event.target.value.replace(/\D/, "");
    if (val === "") val = 0;
    val++;
    val--;
    if (val > this.state.max) val = this.state.max;
    this.setState({
      value: val,
    });
    this.postData();
  }
  postNumber() {}
  render() {
    return (
      <div className="input__counter">
        <div className="input__counter__wrapper">
          <div className="input__counter__pretext ">
            {this.state.loader ? <Loader /> : ""}
          </div>
          <div className="input__counter__container">
            <div
              className="icon__btn dec__btn"
              onClick={() => {
                this.decreaseVal();
              }}
            >
              -
            </div>
            <div className="input__counter__input__container">
              <input
                className="input__counter__input"
                type="text"
                pattern="[0-9]*"
                onChange={(event) => this.handleChange(event)}
                value={this.state.value}
              />
            </div>
            <div
              className="icon__btn inc__btn "
              onClick={() => {
                this.increaseVal();
              }}
            >
              +
            </div>
          </div>
          <div className="input__counter__subtext">
            <SubText value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

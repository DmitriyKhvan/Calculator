import React, { Component } from "react";
import Numbers from "../numbers";
import Actions from "../actions";
import Success from "../success";
import Reset from "../reset";
import actionRules from "../actions-rules";

export default class Calc extends Component {
  state = {
    result: "0"
  };

  onItemSelect = item => {
    const { result } = this.state;

    if (result === "Деление на ноль!" && typeof item == "string") { // add action after division by zero

      this.setState({ result: 0 + item });

    } else if (
      (typeof result == "number" && typeof item == "number") ||
      result === "Деление на ноль!"
    ) {//change number or division by zero

      this.setState({ result: item });

    } else if (typeof result == "number" && typeof item == "string") { //add action

      this.setState({ result: result + item });

    } else if (result.slice(-1) === " " && typeof item == "string") { //change action

      item = result.slice(0, -3) + item;
      this.setState({ result: item });

    } else if (
      (result[0] === "0" && result.length === 1 && typeof item == "number") ||
      (result.slice(-1) === "0" &&
      typeof item == "number" &&
        result[result.length - 2] === " ")
    ) { //change 0

      item = result.slice(0, -1) + item;
      this.setState({ result: item });

    } else { // add number

      this.setState(state => {
        return { result: state.result + item };
      });

    }
  };

  parseStateAndAction = (state) => {
    const stringState = state.result+"";
      const arrayState = stringState.split(" ");
      if (arrayState.length === 5 || (arrayState.length === 3 && arrayState[2] !== "")) {
        actionRules(arrayState, state);
      }
  }

  onActionSelect = item => {
    this.onItemSelect(item);

    this.setState(state => {
      this.parseStateAndAction(state);
    });
  };

  onResetSelect = () => {
    this.setState({result: "0"});
  };

  onSuccessSelect = () => {
    this.setState(state => {
      this.parseStateAndAction(state);
    });

    this.forceUpdate();
  };

  render() {
    const { result } = this.state;

    console.log("render ", result);
    return (
      <div id="calc">
        <div className="screen text-right">{result}</div>
        <div className="desc">
          <div className="numbersAndRes">
            <Numbers onItemSelect={this.onItemSelect} />
            <Success onSuccessSelect={this.onSuccessSelect} />
          </div>
          <Actions onActionSelect={this.onActionSelect} />
        </div>
        <Reset onResetSelect={this.onResetSelect} />
      </div>
    );
  }
}

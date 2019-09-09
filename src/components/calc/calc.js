import React, { Component } from "react";
import Numbers from "../numbers";
import Actions from "../actions";
import Success from "../success";
import Reset from "../reset";
import actionRules from "../actions-rules";

export default class Calc extends Component {

  _DIVISION_BY_ZERO = "Деление на ноль!";
              _ZERO = "0";
        _RESULT_END = 3;
   _RESULT_CONTINUE = 4;            

  state = {
    result: this._ZERO
  };


  onItemSelect = item => {
    const { result } = this.state;

    if (result === this._DIVISION_BY_ZERO && typeof item == "string") { // add action after division by zero

      this.setState({ result: this._ZERO + item });

    } else if (
      (typeof result == "number" && typeof item == "number") ||
      result === this._DIVISION_BY_ZERO
    ) {//change number or division by zero

      this.setState({ result: item+"" });

    } else if (typeof result == "number" && typeof item == "string") { //add action

      if(item === "."){
        this.setState({ result: 0 + item });
      } else {
        this.setState({ result: result + item });
      }

    } else if (result.slice(-1) === " " && typeof item == "string") { //change action

      if(item === "."){
        item = 0 + item;
        this.setState({ result: result + item });
      } else {
        item = result.slice(0, -3) + item;
        this.setState({ result: item });
      }

    } else if (
      (result.slice(0) === this._ZERO && result.length === 1 && typeof item == "number") ||
      (result.slice(-1) === this._ZERO &&
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
    const stringResult = state.result+"";
      const parseResultToArray = stringResult.trim().split(" ");

      if (parseResultToArray.length === this._RESULT_CONTINUE || parseResultToArray.length === this._RESULT_END ) {
        actionRules(parseResultToArray, state,  this._DIVISION_BY_ZERO, this._ZERO);
      }
  }

  onActionSelect = (item) => {
    this.onItemSelect(item);

    this.setState((state) => {
      this.parseStateAndAction(state);
    });
  };

  onResetSelect = () => {
    this.setState({result: this._ZERO});
  };

  onSuccessSelect = () => {
    this.setState((state) => {
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

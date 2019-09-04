import React, { Component } from 'react';
import Numbers from '../numbers';
import Actions from '../actions';
import Success from '../success';
import Reset from '../reset';
//import actionRules from '../actions-rules';

export default class Calc extends Component {

  state = {
    result: "0"
  }

  onItemSelect = (item) => {
    const {result} = this.state;

    console.log(result, item);

    if(result === "Алё! Деление на ноль!" && isNaN(item)) {
      this.setState((state) => {
        return {result: 0 + item};
      });
    } else if ((typeof result == "number" && typeof item == "number") || result === "Алё! Деление на ноль!") {

      console.log(1);

      this.setState((state) => {
        return {result: item + "" };
      });   

    } else if (typeof result == "number" && typeof item == "string") {

      console.log(2);
      this.setState((state) => {
        return {result: result + item };
      });

    } else if((result.slice(-1) === " " && isNaN(item)) || (result[0] === "0" && result.length === 1 && !isNaN(item))) {
      console.log(3);
      item = result.slice(0, -3) + item;

      this.setState((state) => {
        return {result: item };
      });

    } else {
      
      this.setState((state) => {
        console.log('хранил ',state.result, 'символ ',item);
        return {result: state.result + item };
      });
    }

  }
  
  onActionSelect = (item) => {
    this.onItemSelect(item);
    
    this.setState((state) => {
    const str = state.result+""; 
    let arr = [];
    arr = str.split(' ');
    if (arr.length === 5) {
      //actionRules(arr, state);
      switch (arr[1]) {
        case "/":
            if(arr[2] === "0") {
              return state.result = "Алё! Деление на ноль!"
            } else {
              return state.result = (+arr[0] / +arr[2]).toFixed(15) + ` ${arr[3]} `;
            }
            
        case "*":
            return state.result = +arr[0] * +arr[2] + ` ${arr[3]} `;
              
        case "+":
            return state.result = +arr[0] + +arr[2] + ` ${arr[3]} `;
              
        case "-":
            return  state.result = +arr[0] - +arr[2] + ` ${arr[3]} `;
              
        default:
          return state.result;
      }
      
    }
    });

  }

  onResetSelect = () => {
    this.setState((state) => {
      return {
        result: '0'
      }
    });
  }

  onSuccessSelect = () => {
    this.setState((state) => {
      const str = state.result+"";
      let arr = [];
      arr = str.split(' ');

      if (arr.length === 3 && arr[2] !== "") {

        console.log("когда равно! ",arr[3]);
        //actionRules(arr, state);
        switch (arr[1]) {
          case "/":
              if(arr[2] === "0") {
                return state.result = "Алё! Деление на ноль!"
              } else {
                return state.result = (+arr[0] / +arr[2]).toFixed(15);
              }
        
          case "*":
              return state.result = +arr[0] * +arr[2];
                
          case "+":
              return state.result = +arr[0] + +arr[2];
                
          case "-":
              return  state.result = +arr[0] - +arr[2];
                
          default:
            return state.result;
        }
        
      }
      });   
      
      
  }

  render() {
    
    const { result } = this.state;  

    console.log('render ',result);
    return (
      <div id="calc">
        <div className="screen text-right">{ result }</div>
        <div className="desc">
          <div className="numbersAndRes">
            <Numbers onItemSelect = {this.onItemSelect}/>
            <Success onSuccessSelect = {this.onSuccessSelect} />
          </div>
          <Actions onActionSelect = {this.onActionSelect}/>
         
        </div>
        <Reset onResetSelect = {this.onResetSelect}/>
      </div>
       
    );
  };
}



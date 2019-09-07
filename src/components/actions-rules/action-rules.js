
const actionRules = ([fistNumber, firstAction, secondNumber, secondAction], state, _DIVISION_BY_ZERO, _ZERO) => {
 
  let item = 0;
  if (secondAction) {
    item = ` ${secondAction} `;
  }
  
  switch (firstAction) {
    case "/":
        if(secondNumber === _ZERO) {
          return state.result = _DIVISION_BY_ZERO
        } else {
          return state.result = +(+fistNumber / +secondNumber).toFixed(15) + item;
        }
        
    case "*":
        return state.result = +fistNumber * +secondNumber + item;
          
    case "+":
        return state.result = +fistNumber + +secondNumber + item;
          
    case "-":
        return  state.result = +fistNumber - +secondNumber + item;
          
    default:
      return state.result;
  }
}


export default actionRules;

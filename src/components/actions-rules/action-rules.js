
const actionRules = (arr, state) => {
 
  let action = 0;
  if (arr[3]) {
    
    action = ` ${arr[3]} `;
  }
  
  switch (arr[1]) {
    case "/":
        if(arr[2] === "0") {
          return state.result = "Алё! Деление на ноль!"
        } else {
          return state.result = (+arr[0] / +arr[2]).toFixed(15) + action;
        }
        
    case "*":
        return state.result = +arr[0] * +arr[2] + action;
          
    case "+":
        console.log(state.result = +arr[0] + +arr[2] + action);
        return state.result = +arr[0] + +arr[2] + action;
          
    case "-":
        return  state.result = +arr[0] - +arr[2] + action;
          
    default:
      return state.result;
  }
}


export default actionRules;

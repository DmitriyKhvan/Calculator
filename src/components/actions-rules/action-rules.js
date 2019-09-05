
const actionRules = (arrayState, state) => {
 
  let item = 0;
  if (arrayState[3]) {
    item = ` ${arrayState[3]} `;
  }
  
  switch (arrayState[1]) {
    case "/":
        if(arrayState[2] === "0") {
          return state.result = "Деление на ноль!"
        } else {
          return state.result = +(+arrayState[0] / +arrayState[2]).toFixed(15) + item;
        }
        
    case "*":
        return state.result = +arrayState[0] * +arrayState[2] + item;
          
    case "+":
        return state.result = +arrayState[0] + +arrayState[2] + item;
          
    case "-":
        return  state.result = +arrayState[0] - +arrayState[2] + item;
          
    default:
      return state.result;
  }
}


export default actionRules;

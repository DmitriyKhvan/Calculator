import React from 'react';
import './numbers.css'

const Numbers = ({onItemSelect}) => {

  const arrNumber = [7,8,9,4,5,6,1,2,3,0,"."];
  const numbers = arrNumber.map((item) => {
    return (
      <button className="btn btn-outline-primary btn-lg"
        key = {item}
        onClick={() => onItemSelect(item)}
        >
        {item}
      </button>
    );
  });

  return (
    <React.Fragment>
     {numbers}
    </React.Fragment>
  );
}

export default Numbers;
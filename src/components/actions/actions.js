import React from 'react';
import './actions.css'

const Actions = ({onActionSelect}) => {

  const arrActions = [' / ',' * ',' + ',' - '];
  const actions = arrActions.map((item) => {
    return(
      <button className="btn btn-outline-warning btn-lg"
        key = {item}
        onClick = {() => onActionSelect(item)}
      >
        {item}
      </button>
    );  
  });


  return (
    <div className="actions">
      {actions}
    </div>
  );
};

export default Actions;
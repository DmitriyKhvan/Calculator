import React from 'react';

const Fractions = ({onFractionSelect}) => {
  return(
    <button className="btn btn-outline-primary btn-lg"
        onClick={() => onFractionSelect(".")}
        >
        .
      </button>
  )
}

export default Fractions;
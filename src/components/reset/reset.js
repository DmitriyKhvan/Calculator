import React from 'react';
import './reset.css'

const Reset = ({onResetSelect}) => {
  return (
    <div className="reset">
      <button className="btn btn-outline-secondary btn-lg"
        onClick={() => onResetSelect()}
      >
        Reset
      </button>
    </div>
  )
}

export default Reset;
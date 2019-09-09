import React from 'react';
import './success.css'

const Success = ({onSuccessSelect}) => {
  return (
    <button className="btn btn-outline-success btn-lg"
      onClick = {() => onSuccessSelect(".")}
    >
      =
    </button>
  )
}

export default Success;
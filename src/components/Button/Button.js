import React from 'react';

const Button = (props) => (
  <button
    className={props.className}
    onClick={props.click} >
    {props.children}
  </button>
);

export default Button;

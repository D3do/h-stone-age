import React from 'react';

const Button = (props) => (
  <button onClick={props.click}>{props.children}</button>
);

export default Button;

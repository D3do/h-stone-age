import React from 'react';

const input = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          value={props.value} />
      </label>
      {props.errorText ? <p>{props.errorText}</p> : ''}
    </div>
  );
};

export default input;

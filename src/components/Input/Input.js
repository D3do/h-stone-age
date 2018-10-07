import React from 'react';
import './Input.scss';

const input = (props) => {
  return (
    <div className="Input">
      <label className="Row">
        {props.label ? <p>{props.label}</p> : null}
        <input
          className={props.errorText
            ? "Invalid"
            : props.className}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          value={props.value} />
      </label>
      {props.errorText
        ? <p className="Error">{props.errorText}</p>
        : ''}
    </div>
  );
};

export default input;

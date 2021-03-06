import './Button.css';
import React from 'react';

const Button = (props) => {
  return (    
    <button className={
      `button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
      `}
      onClick={e => props.click(props.label)}
      >
        {props.label}
    </button>
  );
}

export default Button;

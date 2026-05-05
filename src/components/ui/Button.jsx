import React from 'react';
import './Button.css';

const Button = ({text,variant, onClick}) => {
  return (
    <button className={`btn btn-${variant}`} onClick = {onClick}>
      {children}
    </button>
  );
};

export default Button;
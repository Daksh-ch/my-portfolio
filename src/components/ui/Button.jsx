import React from 'react';
import './Button.css';

const Button = ({children,variant, onClick}) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import '../assets/css/Button.css';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button-link">
      {children}
    </button>
  );
};

export default Button;
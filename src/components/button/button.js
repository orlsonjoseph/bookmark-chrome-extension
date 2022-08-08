import React from 'react';
import './button.css';

export const Button = ({ children, onClick, type = 'primary', className }) => {
  return (
    <button
      className={`nodraft-button nodraft-button-${type}`} onClick={onClick}
    >
      {children}
    </button>
  );
};

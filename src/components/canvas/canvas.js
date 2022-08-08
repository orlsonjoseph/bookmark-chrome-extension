import React from 'react';
import './canvas.css';

export const Canvas = ({ isOpen, children }) => {
  return (
    <div className={'nodraft-canvas nodraft-canvas' + (isOpen ? '-open' : undefined)}>
      {children}
    </div>
  );
};

import React from 'react';
import './scss/components/_button.scss';

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

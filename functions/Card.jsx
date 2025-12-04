import React from 'react';
import './scss/components/_card.scss';

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;

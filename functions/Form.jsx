import React from 'react';
import './scss/components/_form.scss';

function Form({ children }) {
  return <form className="form">{children}</form>;
}

export default Form;

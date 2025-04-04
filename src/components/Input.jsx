import React from 'react';

const Input = ({ placeholder, onChange }) => {
  return <input className="input" type="text" placeholder={placeholder} onChange={onChange}/>;
};

export default Input;

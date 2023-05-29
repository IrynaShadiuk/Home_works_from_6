import React, { useState } from 'react';

const InputField = () => {
  const [title, setTitle] = useState('Task-1');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTitle(inputValue || 'Task-1');
  };

  return (
    <div>
      <h2>{title}</h2>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default InputField;
import React, { useState } from 'react';

export default function AudacityTextBox({ onChangeValue }) {
  const [textBoxValue, setTextBoxValue] = useState('');
  const onChangeTextBoxValue = event => {
    const newTextValue = event.target.value;
    setTextBoxValue(newTextValue);
    onChangeValue(newTextValue);
  };

  return <input value={textBoxValue} onChange={onChangeTextBoxValue} />;
}

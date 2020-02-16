import React from 'react';

export default function AudacityButton({ buttonText, onClickButton }) {
  return <button onClick={onClickButton}>{buttonText}</button>;
}

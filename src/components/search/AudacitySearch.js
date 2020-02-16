import React, { useState } from 'react';
import AudacityTextBox from '../utilities/AudacityTextBox';
import AudacityButton from '../utilities/AudacityButton';

export default function AudacitySearch({ onClickSearchButton }) {
  const [searchText, setSearchText] = useState('');
  const onChangeTextBoxValue = searchText => {
    setSearchText(searchText);
  };
  const onClickSearch = event => {
    onClickSearchButton(searchText);
  };
  return (
    <div>
      <AudacityTextBox onChangeValue={onChangeTextBoxValue} />
      <AudacityButton buttonText='Search' onClickButton={onClickSearch} />
    </div>
  );
}

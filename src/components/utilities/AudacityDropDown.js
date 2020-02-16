import React, { useState } from 'react';

export default function AudacityDropDown({
  items = ['item1', 'item2'],
  header = 'header',
  name = 'dropDown name',
  selectedValue = 0,
  onSelectValue
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelectDropDown = event => {
    setSelectedItem(event.target.value);
    onSelectValue(event.target.value);
  };
  return (
    <select name={name} value={selectedItem} onChange={onSelectDropDown}>
      <option value={0}>{header}</option>
      {items.map(item => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

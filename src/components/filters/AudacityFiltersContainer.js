import React, { useEffect, useState } from 'react';
import AudacityDropDown from '../utilities/AudacityDropDown';
import { PRODUCT_GROUP_ENUM, TARGET_GROUP_ENUM } from '../../enum/filterType';

export default function AudacityFiltersContainer({
  manufactures,
  onChangeFilter
}) {
  const [productGroup, setProductGroup] = useState([]);
  const [targetGroup, setTargetGroup] = useState([]);
  useEffect(() => {
    setTargetGroup(getTargetGroup);
  }, [manufactures]);

  const getTargetGroup = manufactures.map(({ targetGroup }) => targetGroup);
  const onSelectTargetGroup = selectedTargetGroup => {
    onChangeFilter(TARGET_GROUP_ENUM, selectedTargetGroup);
  };
  return (
    <div>
      <AudacityDropDown
        items={targetGroup}
        header='Target Group'
        name='Target Group'
        selectedValue
        onSelectValue={onSelectTargetGroup}
      />
    </div>
  );
}

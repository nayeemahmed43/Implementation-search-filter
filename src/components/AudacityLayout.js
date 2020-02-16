import React, { useState, useEffect } from 'react';
import AudacitySearch from './search/AudacitySearch';
import AudacityManufacturesContainer from './manufactures/AudacityManufacturesContainer';
import AudacityFiltersContainer from './filters/AudacityFiltersContainer';
import { getManufactures } from '../action/manufacturers';
import { PRODUCT_GROUP_ENUM, TARGET_GROUP_ENUM } from '../enum/filterType';

export default function AudacityLayout() {
  const [manufactures, setManufactures] = useState([]);
  const [updatedManufactures, setUpdatedManufactures] = useState([]);
  useEffect(() => {
    const manufacturesList = getManufactures();
    setManufactures(manufacturesList);
    setUpdatedManufactures(manufacturesList);
  }, []);

  const onClickSearchButton = (searchText = '') => {
    searchText = searchText.toLowerCase().trim();
    const newManufactures = manufactures.filter(({ companyName }) =>
      companyName.toLowerCase().includes(searchText)
    );
    setUpdatedManufactures(newManufactures);
  };

  const onChangeFilterGroup = (filterType, selectedItem) => {
    switch (filterType) {
      case PRODUCT_GROUP_ENUM:
        return;
      case TARGET_GROUP_ENUM:
        setUpdatedManufactures(
          getFilteredManufacturesByTargetGroup(selectedItem)
        );
        return;
      default:
        return manufactures;
    }
  };

  const getFilteredManufacturesByTargetGroup = selectedTargetGroup => {
    const newManufactures = manufactures.filter(
      manufacture => manufacture.targetGroup === selectedTargetGroup
    );
    return newManufactures;
  };

  return (
    <div>
      <AudacitySearch onClickSearchButton={onClickSearchButton} />
      <AudacityFiltersContainer
        manufactures={manufactures}
        onChangeFilter={onChangeFilterGroup}
      />
      <AudacityManufacturesContainer manufactures={updatedManufactures} />
    </div>
  );
}

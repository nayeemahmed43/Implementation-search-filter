import React from 'react';
import AudacityCard from '../utilities/AudacityCard';

export default function AudacityManufacturesContainer({ manufactures }) {
  return (
    <div>
      {manufactures.map(({ companyName, address }) => (
        <AudacityCard companyName={companyName} address={address} />
      ))}
    </div>
  );
}

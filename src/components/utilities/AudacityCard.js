import React from 'react';

export default function AudacityCard({ companyName, address }) {
  return (
    <div>
      <div>Company Image</div>
      <div>Company Name: {companyName}</div>
      <div>Address: {address}</div>
    </div>
  );
}

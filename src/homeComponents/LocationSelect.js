// LocationSelect.js

import React from 'react';
import './loc.css';

const LocationSelect = ({ onChange }) => {
  const locations = [
    'Monastir, Tunisia',
    'Sousse, Tunisia',
    'Mahdia, Tunisia',
    'Tataouine, Tunisia',
    'Zaghouan, Tunisia'
  ];

  return (
    <select className='Selection' onChange={onChange}>
      {locations.map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

export default LocationSelect;

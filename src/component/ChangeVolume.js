// src/component/ChangeVolume.js

import React, { useState } from 'react';

const ChangeVolume = ({ onClose }) => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    // Add logic to change volume
  };

  return (
    <div className="change-volume">
      <h2>Change Volume</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p>Volume: {volume}%</p>
      <button onClick={onClose}>Close</button>

      
    </div>
  );
};

export default ChangeVolume;

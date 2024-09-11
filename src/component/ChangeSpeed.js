// src/component/ChangeSpeed.js

import React, { useState } from 'react';

const ChangeSpeed = ({ onClose }) => {
  const [speed, setSpeed] = useState(1);

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
    // Add logic to change speed
  };

  return (
    <div className="change-speed">
      <h2>Change Speed</h2>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={speed}
        onChange={handleSpeedChange}
      />
      <p>Speed: {speed}x</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChangeSpeed;

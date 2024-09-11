// src/component/ChangeVideoSpeed.js
import React, { useState } from 'react';

const ChangeVideoSpeed = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [speed, setSpeed] = useState(1);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleApplySpeed = () => {
    if (videoFile) {
      alert(`Changing speed of ${videoFile.name} to ${speed}x`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Change Video Speed</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={handleSpeedChange} />
      <button onClick={handleApplySpeed}>Apply Speed</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChangeVideoSpeed;

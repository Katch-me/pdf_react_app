// src/component/ChangeVolume.js
import React, { useState } from 'react';

const ChangeVolume = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [volume, setVolume] = useState(1);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleApplyVolume = () => {
    if (videoFile) {
      alert(`Changing volume of ${videoFile.name} to ${volume}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Change Volume</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
      <button onClick={handleApplyVolume}>Apply Volume</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChangeVolume;

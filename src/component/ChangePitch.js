// src/component/ChangePitch.js
import React, { useState } from 'react';

const ChangePitch = ({ onClose }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [pitch, setPitch] = useState(1);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handlePitchChange = (event) => {
    setPitch(event.target.value);
  };

  const handleApplyPitch = () => {
    if (audioFile) {
      alert(`Changing pitch of ${audioFile.name} to ${pitch}`);
    } else {
      alert('Please select an audio file first.');
    }
  };

  return (
    <div>
      <h2>Change Pitch</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={handlePitchChange} />
      <button onClick={handleApplyPitch}>Apply Pitch</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ChangePitch;

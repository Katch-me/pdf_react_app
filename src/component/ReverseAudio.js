// src/component/ReverseAudio.js
import React, { useState } from 'react';

const ReverseAudio = ({ onClose }) => {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleReverse = () => {
    if (audioFile) {
      alert(`Reversing audio: ${audioFile.name}`);
    } else {
      alert('Please select an audio file first.');
    }
  };

  return (
    <div>
      <h2>Reverse Audio</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleReverse}>Reverse Audio</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ReverseAudio;

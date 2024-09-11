// src/component/AudioJoiner.js
import React, { useState } from 'react';

const AudioJoiner = ({ onClose }) => {
  const [audioFiles, setAudioFiles] = useState([]);

  const handleFileChange = (event) => {
    setAudioFiles([...audioFiles, ...event.target.files]);
  };

  const handleJoinAudio = () => {
    if (audioFiles.length > 1) {
      alert(`Joining ${audioFiles.length} audio files`);
    } else {
      alert('Please select at least two audio files to join.');
    }
  };

  return (
    <div>
      <h2>Audio Joiner</h2>
      <input type="file" accept="audio/*" multiple onChange={handleFileChange} />
      <button onClick={handleJoinAudio}>Join Audio</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AudioJoiner;

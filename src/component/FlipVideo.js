// src/component/FlipVideo.js
import React, { useState } from 'react';

const FlipVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleFlip = () => {
    if (videoFile) {
      alert(`Flipping video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Flip Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleFlip}>Flip Video</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FlipVideo;

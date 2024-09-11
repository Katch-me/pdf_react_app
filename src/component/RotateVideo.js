// src/component/RotateVideo.js
import React, { useState } from 'react';

const RotateVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleRotate = () => {
    if (videoFile) {
      alert(`Rotating video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Rotate Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleRotate}>Rotate Video</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RotateVideo;

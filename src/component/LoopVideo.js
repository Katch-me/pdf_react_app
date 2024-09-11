// src/component/LoopVideo.js
import React, { useState } from 'react';

const LoopVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleLoop = () => {
    if (videoFile) {
      alert(`Looping video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Loop Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleLoop}>Loop Video</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoopVideo;

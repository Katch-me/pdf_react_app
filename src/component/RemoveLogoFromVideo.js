// src/component/RemoveLogoFromVideo.js
import React, { useState } from 'react';

const RemoveLogoFromVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleRemoveLogo = () => {
    if (videoFile) {
      alert(`Removing logo from video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Remove Logo from Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleRemoveLogo}>Remove Logo</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RemoveLogoFromVideo;

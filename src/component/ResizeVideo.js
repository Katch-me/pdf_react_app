// src/component/ResizeVideo.js
import React, { useState } from 'react';

const ResizeVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleResize = () => {
    if (videoFile) {
      alert(`Resizing video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Resize Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleResize}>Resize Video</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ResizeVideo;

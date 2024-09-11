// src/component/CropVideo.js
import React, { useState } from 'react';

const CropVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleCrop = () => {
    if (videoFile) {
      alert(`Cropping video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Crop Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleCrop}>Crop Video</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CropVideo;

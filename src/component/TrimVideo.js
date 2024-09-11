// src/component/TrimVideo.js

import React, { useState } from 'react';

const TrimVideo = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleVideoUpload = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleTrimVideo = () => {
    // Add logic to trim video
  };

  return (
    <div className="trim-video">
      <h2>Trim Video</h2>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      <input 
        type="text" 
        placeholder="Start time (in seconds)" 
        value={startTime} 
        onChange={(e) => setStartTime(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="End time (in seconds)" 
        value={endTime} 
        onChange={(e) => setEndTime(e.target.value)} 
      />
      <button onClick={handleTrimVideo}>Trim Video</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TrimVideo;

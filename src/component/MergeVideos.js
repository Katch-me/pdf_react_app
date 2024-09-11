// src/component/MergeVideos.js
import React, { useState } from 'react';

const MergeVideos = ({ onClose }) => {
  const [videoFiles, setVideoFiles] = useState([]);

  const handleFilesChange = (event) => {
    setVideoFiles([...event.target.files]);
  };

  const handleMerge = () => {
    if (videoFiles.length > 1) {
      alert(`Merging ${videoFiles.length} videos.`);
    } else {
      alert('Please select at least two video files.');
    }
  };

  return (
    <div className="mergePdfComponent featureComponent">
      <h2>Merge Videos</h2>
      <input type="file" accept="video/*" multiple onChange={handleFilesChange} />
      <button onClick={handleMerge}>Merge Videos</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MergeVideos;

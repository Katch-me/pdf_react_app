import React, { useState } from 'react';


function VideoConversion({ onClose }) {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const convertVideo = () => {
    // Simulate video conversion
    console.log(`Converting video file: ${videoFile.name}`);
  };

  return (
    <div className="tool-container">
      <h2>Video Conversion</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoFile && (
        <>
          <button onClick={convertVideo}>Convert Video</button>
        </>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default VideoConversion;

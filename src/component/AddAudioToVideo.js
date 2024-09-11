// src/component/AddAudioToVideo.js

import React, { useState } from 'react';

const AddAudioToVideo = ({ onClose }) => {
  const [audioFile, setAudioFile] = useState(null);

  const handleAudioChange = (event) => {
    setAudioFile(event.target.files[0]);
    // Add logic to add audio to video
  };

  return (
    <div className="add-audio-to-video">
      <h2>Add Audio to Video</h2>
      <input type="file" accept="audio/*" onChange={handleAudioChange} />
      {audioFile && <p>Selected audio: {audioFile.name}</p>}
      <button onClick={onClose}>Close</button>

      <ul className='data'>
          <li>
            <h2 className='heading'>How to put music over a video</h2>
            <p>You can add audio files to your video, align it on the timeline, adjust its balance and do other edits. Follow these instructions to create your unique video.</p>
          </li>
          <li>
            <h3>Upload video</h3>
            <p>Open Music Adding tool in your browser on your computer or a smartphone. Open file or drag and drop the video.</p>
          </li>
          <li>
            <h3>Add audio</h3>
            <p>Click Add at the bottom of the editing window to select an audio file and it'll be added as a separate track. Crop it and adjust Volume by clicking Sound.</p>
          </li>
          <li>
            <h3>Choose an output video format</h3>
            <p>Click on the gear icon next to Save to see the encoding settings. MP4 will work for the web, MKV for offline use, and MOV for Apple devices.</p>
          </li>
          <li>
            <h3>Save and continue your work</h3>
            <p>Now you can download the video with your audio as a single file. Save it in your device's memory or share it on social media.</p>
          </li>
        </ul>
    </div>
  );
};

export default AddAudioToVideo;

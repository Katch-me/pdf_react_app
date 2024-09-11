// src/component/ChangeAudioSpeed.js
import React, { useState } from 'react';

function ChangeAudioSpeed({ onClose }) {
  const [audioFile, setAudioFile] = useState(null);
  const [speed, setSpeed] = useState(1); // 1 is normal speed

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const applySpeedChange = () => {
    // Simulate applying speed change
    console.log(`Applying speed change to ${audioFile.name} with speed: ${speed}`);
  };

  return (
    <div className="tool-container">
      <h2>Change Audio Speed</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {audioFile && (
        <>
          <label>
            Speed:
            <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={handleSpeedChange} />
          </label>
          <button onClick={applySpeedChange}>Apply Speed Change</button>
        </>
      )}
      <button onClick={onClose}>Close</button>
      <ul className='data'>
          <li>
            <h2 className='heading'>How to speed up a song?</h2>
          </li>
          <li>
            <h3>Choose FIle</h3>
            <p>Select any file into the Audio Speed Changer window, or open files from URL, Dropbox and Google Drive folders.</p>
          </li>
          <li>
            <h3>Edit your audio</h3>
            <p>Use a slider to adjust the speed of your audio file. Moving it to the right increases the speed, moving it to the left decreases the speed.</p>
          </li>
          <li>
            <h3>Choose the audio format</h3>
            <p>Save the audio file in the desired format (mp3, m4a, m4r, flac, or wav) and click "Save" to download it.</p>
          </li>
      </ul>
    </div>
  );
}

export default ChangeAudioSpeed;

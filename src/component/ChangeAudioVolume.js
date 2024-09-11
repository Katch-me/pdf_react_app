// src/component/ChangeAudioVolume.js
import React, { useState } from 'react';

function ChangeAudioVolume({ onClose }) {
  const [audioFile, setAudioFile] = useState(null);
  const [volume, setVolume] = useState(1); // 1 is 100% volume

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const applyVolumeChange = () => {
    // Simulate applying volume change
    console.log(`Applying volume change to ${audioFile.name} with volume level: ${volume}`);
  };

  return (
    <div className="tool-container">
      <h2>Change Audio Volume</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {audioFile && (
        <>
          <label>
            Volume:
            <input type="range" min="0" max="2" step="0.1" value={volume} onChange={handleVolumeChange} />
          </label>
          <button onClick={applyVolumeChange}>Apply Volume Change</button>
        </>
      )}
      <button onClick={onClose}>Close</button>

      <ul className='data'>
          <li>
            <h2 className='heading'>How to make mp3 louder?</h2>
          </li>
          <li>
            <h3>Open file</h3>
            <p>Select a file you want to modify from your device, Dropbox or Google Drive folders, or open it via URL.</p>
          </li>
          <li>
            <h3>Adjust volume</h3>
            <p>Then use the volume slider at the bottom of the app to set the volume you want.</p>
          </li>
          <li>
            <h3>Save modified file</h3>
            <p>Save the audio file in the desired format (mp3, m4a, m4r, flac, or wav) and click "Save" to download it.</p>
          </li>
        </ul>
    </div>
  );
}

export default ChangeAudioVolume;

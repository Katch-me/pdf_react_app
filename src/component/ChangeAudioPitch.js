// src/component/ChangeAudioPitch.js
import React, { useState } from 'react';

function ChangeAudioPitch({ onClose }) {
  const [audioFile, setAudioFile] = useState(null);
  const [pitch, setPitch] = useState(1); // 1 is normal pitch

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handlePitchChange = (e) => {
    setPitch(e.target.value);
  };

  const applyPitchChange = () => {
    // Simulate applying pitch change
    console.log(`Applying pitch change to ${audioFile.name} with pitch level: ${pitch}`);
  };

  return (
    <div className="tool-container">
      <h2>Change Audio Pitch</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {audioFile && (
        <>
          <label>
            Pitch:
            <input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={handlePitchChange} />
          </label>
          <button onClick={applyPitchChange}>Apply Pitch Change</button>
        </>
      )}
      <button onClick={onClose}>Close</button>
      <ul className='data'>
          <li>
            <h2 className='heading'>How to change the key of a song?</h2>
          </li>
          <li>
            <h3>Upload File</h3>
            <p>Select an audio file from your device, Dropbox, or Google Drive. You can also open files via URL.</p>
          </li>
          <li>
            <h3>Adjust the pitch</h3>
            <p>Select an interval in the file and shift the pitch by moving the slider left and right.</p>
          </li>
          <li>
            <h3>Download result</h3>
            <p>After you finish editing, pick a format (mp3, m4a, m4r, flac, or wav) and click "Save" to download the file.</p>
          </li>
        </ul>
    </div>
  );
}

export default ChangeAudioPitch;

// src/component/Equalizer.js
import React, { useState } from 'react';

const Equalizer = ({ onClose }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [bass, setBass] = useState(0);
  const [treble, setTreble] = useState(0);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleApplyEqualizer = () => {
    if (audioFile) {
      alert(`Applying equalizer to ${audioFile.name} with bass: ${bass} and treble: ${treble}`);
    } else {
      alert('Please select an audio file first.');
    }
  };

  return (
    <div>
      <h2>Equalizer</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <input type="range" min="-10" max="10" step="1" value={bass} onChange={(e) => setBass(e.target.value)} />
      <input type="range" min="-10" max="10" step="1" value={treble} onChange={(e) => setTreble(e.target.value)} />
      <button onClick={handleApplyEqualizer}>Apply Equalizer</button>
      <button onClick={onClose}>Close</button>

      <ul className='data'>
          <li>
            <h2 className='heading'>How to boost bass online?</h2>
          </li>
          <li>
            <h3>Choose an audio file</h3>
            <p>Select files directly from your device, open them from cloud storage (Dropbox or Google Drive) or enter a URL.</p>
          </li>
          <li>
            <h3>Adjust the sound</h3>
            <p>Use sliders in the audio equalizer app to modify frequencies and decibels or select one of the EQ presets.</p>
          </li>
          <li>
            <h3>Choose the file type</h3>
            <p>When you are satisfied with the sound, select an audio format (mp3, m4a, m4r, flac, or wav) and save it to your device.</p>
          </li>
        </ul>
    </div>
  );
};

export default Equalizer;

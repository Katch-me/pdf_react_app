// src/component/TrimAudio.js
import React, { useState } from 'react';

const TrimAudio = ({ onClose }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleTrim = () => {
    if (audioFile) {
      alert(`Trimming audio: ${audioFile.name} from ${startTime}s to ${endTime}s`);
    } else {
      alert('Please select an audio file first.');
    }
  };

  return (
    <div>
      <h2>Trim Audio</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} /><br/><br/>
      <input type="number" placeholder="Start Time (s)" value={startTime} onChange={(e) => setStartTime(e.target.value)} /><br/><br/>
      <input type="number" placeholder="End Time (s)" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <button onClick={handleTrim}>Trim</button>
      <button onClick={onClose}>Close</button>
      <ul className='data'>
          <li>
            <h2 className='heading'>How to Trim Audio?</h2>
          </li>
          <li>
            <h3>Choose file</h3>
            <p>Select the music file you would like to edit: drag and drop your file, or upload it from your hard drive or cloud storage.</p>
          </li>
          <li>
            <h3>Adjust intervals</h3>
            <p>Adjust the start and end of the track by dragging the interval controls or using the arrow keys on your keyboard.</p>
          </li>
          <li>
            <h3>Download result</h3>
            <p>Use several features at once if necessary – shift pitch, change volume or speed. Save music into one of the available output formats depending on your needs or preferences.</p>
          </li>
        </ul>
    </div>
  );
};

export default TrimAudio;

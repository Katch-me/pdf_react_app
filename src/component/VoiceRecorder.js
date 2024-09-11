// src/component/VoiceRecorder.js
import React, { useState } from 'react';

const VoiceRecorder = ({ onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Placeholder for actual recording logic
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setAudioBlob(new Blob()); // Placeholder for actual audio blob
  };

  const handleSaveRecording = () => {
    if (audioBlob) {
      alert('Saving recording');
    } else {
      alert('No recording to save');
    }
  };

  return (
    <div>
      <h2>Voice Recorder</h2>
      <button onClick={isRecording ? handleStopRecording : handleStartRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button onClick={handleSaveRecording} disabled={!audioBlob}>
        Save Recording
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VoiceRecorder;

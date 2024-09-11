// src/component/ScreenRecorder.js
import React, { useState } from 'react';

const ScreenRecorder = ({ onClose }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
    alert('Screen recording started.');
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    alert('Screen recording stopped.');
  };

  return (
    <div>
      <h2>Screen Recorder</h2>
      {isRecording ? (
        <button onClick={handleStopRecording}>Stop Recording</button>
      ) : (
        <button onClick={handleStartRecording}>Start Recording</button>
      )}
      <button onClick={onClose}>Close</button>

      <ul className='data'>
          <li>
            <h2 className='heading'>How to record the screen online?</h2>
            <p>To use our web-based screen recorder, follow these steps:</p>
          </li>
          <li>
            <h3>Go to the website</h3>
            <p>First, open the website of the online video editor in your web browser and choose</p>
          </li>
          <li>
            <h3>Select Layout</h3>
            <p>On the homepage, you will see two options – 'Full screen' if you want to record a whole screen and 'Custom'. Select the recording area option that best fits your needs.  </p>
          </li>
          <li>
            <h3>Start screen recording</h3>
            <p>Once you have selected the layout, click on the 'Start recording' button to begin the recording process.</p>
          </li>
          <li>
            <h3>Save and upload!</h3>
            <p>When you are done recording, click on the notification to stop the recording. The recorded video will be automatically saved to your computer, and you can edit it using the video editor on the website.</p>
          </li>
        </ul>

    </div>
  );
};

export default ScreenRecorder;

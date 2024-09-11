// src/component/AddTextToVideo.js

import React, { useState } from 'react';

const AddTextToVideo = ({ onClose }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
    // Add logic to add text to video
  };

  return (
    <div>
      <h2>Add Text to Video</h2>
      <label htmlFor="">Add your text here : </label>
      <input type="file" accept="video/*" /><br />
      <input type="text" value={text} onChange={handleTextChange} />
      {text && <p>Text: {text}</p>}
      <button onClick={onClose}>Close</button>
      <ul className='data'>
          <li>
            <h2 className='heading'>How to add text to a video</h2>
            <p>Using our text adding tool, you can add static or animated text to any kind of video content in all possible formats.</p>
          </li>
          <li>
            <h3>Download video</h3>
            <p>Open the text adding tool in a browser on a computer or any other device. Open the file directly on the site or drag and drop the video into the window.</p>
          </li>
          <li>
            <h3>Add text</h3>
            <p>Click "Add Text" in the edit panel. A window for adding text will appear, where you can enter the desired words / line / any other text. After you have added text, you can change the color, size and font of your text in the same text box.</p>
          </li>
          <li>
            <h3>Customize Duration</h3>
            <p>You can adjust the duration of your text on the screen throughout the entire video, or just part of the video. To do this, double-click on the text and select the part on the timeline where you want the text to be. </p>
          </li>
          <li>
            <h3>Customize your video format and Savek</h3>
            <p>Click on the gear icon to see the export settings. Choose the one you need. The most popular is MP4: it will work well for the Internet and social networks.</p>
          </li>
        </ul>
    </div>
  );
};

export default AddTextToVideo;

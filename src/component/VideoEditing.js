// src/component/VideoEditor.js
import React, { useState } from 'react';
import '../Css/VideoTool.css'

const VideoEditor = ({ onClose }) => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleEdit = () => {
    if (videoFile) {
      alert(`Editing video: ${videoFile.name}`);
    } else {
      alert('Please select a video file first.');
    }
  };

  return (
    <div>
      <h2>Video Editor</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleEdit}>Edit Video</button>
      <button onClick={onClose}>Close</button>
      <div className="info">
        <ul className='data'>
          <li>
            <h2 className='heading'>How to Edit a Video Online?</h2>
            <p>You can now edit videos online with a browser. upload your video and edit away! To do this, you will need to do the following:</p>
          </li>
          <li>
            <h3>Upload a video</h3>
            <p>To upload a file to the online editing service, click “Open file” or drag and drop the video from your device.</p>
          </li>
          <li>
            <h3>Edit timeline</h3>
            <p>Add more videos to the timeline, duplicate existing videos, use multiple timeline lanes and adjust the length of the video fragments. </p>
          </li>
          <li>
            <h3>Make necessary edits</h3>
            <p>Use a wide variety of editing tools to implement your idea into life. Crop the frame to the size you need. Rotate by 90 degrees or any other value using a respective handle or a slider. </p>
          </li>
          <li>
            <h3>Download or share online</h3>
            <p>Click the gear icon to select the canvas size, background color, etc. When it’s done, click Save, and select a video that suits your needs.</p>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default VideoEditor;

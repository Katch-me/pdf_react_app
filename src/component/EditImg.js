import React, { useContext, useState } from 'react';
import { PdfContext } from '../PdfContext';
import '../Css/EditImg.css';

function EditImg({ onClose }) {
  const { imageFile, setImageFile, brightness, setBrightness, contrast, setContrast, editedImageUrl, setEditedImageUrl } = useContext(PdfContext);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageFile(e.target.result);
        setSelectedFileName(file.name); // Set selected file name
        setMessage('File selected successfully.');
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setSelectedFileName('');
      setMessage('Please select a valid image file.');
    }
  };

  const handleEdit = () => {
    if (!imageFile) {
      setMessage('Please select an image file first.');
      return;
    }

    setIsEditing(true);

    // Simulated editing logic (you can replace this with actual image processing logic)
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = imageFile;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        setEditedImageUrl(canvas.toDataURL());
        setIsEditing(false);
        setMessage('Image has been edited successfully.');
      };
    }, 2000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = editedImageUrl;
    link.download = 'edited-image.png';
    link.click();
  };

  return (
    <div className="editImg featureComponent">
      <button className="closeButton" onClick={onClose}>X</button>
      <h2>Edit Image</h2>
      <label className="fileLabel">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-9.9 9h-2a1 1 0 100 2h2.08A9.959 9.959 0 0012 22a10 10 0 009.9-9h2.1a1 1 0 100-2h-2.1A10 10 0 0012 2zm0 18a8 8 0 01-7.9-7h15.8a8 8 0 01-7.9 7zM8 12H6l6-6 6 6h-2v4h-4v-4z"/>
        </svg>
        <span>{imageFile ? selectedFileName : 'Select Image'}</span>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <div className="controls">
        <label>
          Brightness:
          <input
            type="range"
            min="0"
            max="200"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
          />
        </label>
        <label>
          Contrast:
          <input
            type="range"
            min="0"
            max="200"
            value={contrast}
            onChange={(e) => setContrast(e.target.value)}
          />
        </label>
      </div>
      <button className="actionButton" onClick={handleEdit} disabled={isEditing}>
        {isEditing ? 'Editing...' : 'Edit Image'}
      </button>
      {message && (
        <p className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</p>
      )}
      {editedImageUrl && (
        <div className="editedImage">
          <img src={editedImageUrl} alt="Edited" />
          <button onClick={handleDownload}>Download Image</button>
        </div>
      )}
    </div>
  );
}

export default EditImg;

import React, { useContext, useState } from 'react';
import { PdfContext } from '../PdfContext';
import '../Css/PdfToPngConverter.css';

const PdfToPngConverter = ({ onClose }) => {
  const { pdfFile, setPdfFile, convertedImages, setConvertedImages } = useContext(PdfContext);
  const [isConverting, setIsConverting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setSelectedFileName(file.name); // Set selected file name
      setErrorMessage(''); // Clear error message when valid file is selected
    } else {
      setPdfFile(null);
      setSelectedFileName('');
      setErrorMessage('Please select a valid PDF file.');
    }
  };

  const handleConvert = () => {
    if (!pdfFile) {
      setErrorMessage('Please select a PDF file first.');
      return;
    }

    setIsConverting(true);
    setErrorMessage(''); // Clear error message on start of conversion

    // Simulated conversion logic
    setTimeout(() => {
      const convertedImagesList = [];
      for (let i = 1; i <= 3; i++) {
        convertedImagesList.push(`https://via.placeholder.com/300x200.png?text=Page${i}`);
      }
      setConvertedImages(convertedImagesList);
      setIsConverting(false);
    }, 2000); // Simulating a 2-second conversion delay
  };

  return (
    <div className="pdfToPngConverter featureComponent">
      <button className="closeButton" onClick={onClose}>X</button>
      <h2>PDF to PNG Converter</h2>
      <label className="fileLabel" htmlFor="fileInput">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-9.9 9h-2a1 1 0 100 2h2.08A9.959 9.959 0 0012 22a10 10 0 009.9-9h2.1a1 1 0 100-2h-2.1A10 10 0 0012 2zm0 18a8 8 0 01-7.9-7h15.8a8 8 0 01-7.9 7zM8 12H6l6-6 6 6h-2v4h-4v-4z"/>
        </svg>
        <span>{selectedFileName ? selectedFileName : 'Choose file'}</span>
        <input id="fileInput" type="file" accept=".pdf" onChange={handleFileChange} />
      </label>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <button onClick={handleConvert} disabled={isConverting}>
        {isConverting ? 'Converting...' : 'Convert PDF to PNG'}
      </button>
      {convertedImages.length > 0 && (
        <div className="convertedImages">
          {convertedImages.map((imageUrl, index) => (
            <div key={index} className="imageContainer">
              <img src={imageUrl} alt={`Converted Page ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PdfToPngConverter;

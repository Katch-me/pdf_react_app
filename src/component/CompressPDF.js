import React, { useContext, useState } from 'react';
import { PdfContext } from '../PdfContext';
import '../Css/CompressPDF.css';

const CompressPDF = ({ onClose }) => {
  const { pdfFile, setPdfFile, isCompressing, setIsCompressing } = useContext(PdfContext);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [compressMessage, setCompressMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setSelectedFileName(file.name);
      setErrorMessage(''); // Clear any previous error messages
    } else {
      setPdfFile(null);
      setSelectedFileName('');
      setErrorMessage('Please select a valid PDF file.');
    }
  };

  const simulateCompressPdf = () => {
    if (!pdfFile) {
      setErrorMessage('Please select a PDF file to compress.');
      return;
    }

    setIsCompressing(true);
    setTimeout(() => {
      setIsCompressing(false);
      setCompressMessage('PDF has been compressed successfully (simulated)!');
      setErrorMessage(''); // Clear any previous error messages
    }, 2000);
  };

  return (
    <div className="compressPdfComponent featureComponent">
      <button className="closeButton" onClick={onClose}>X</button>
      <h2>Compress PDF</h2>
      <label className="fileLabel">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-9.9 9h-2a1 1 0 100 2h2.08A9.959 9.959 0 0012 22a10 10 0 009.9-9h2.1a1 1 0 100-2h-2.1A10 10 0 0012 2zm0 18a8 8 0 01-7.9-7h15.8a8 8 0 01-7.9 7zM8 12H6l6-6 6 6h-2v4h-4v-4z"/>
        </svg>
        <span>{selectedFileName ? selectedFileName : 'Select PDF'}</span>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </label>
      <button className="actionButton" onClick={simulateCompressPdf} disabled={isCompressing}>
        {isCompressing ? 'Compressing...' : 'Compress PDF'}
      </button>
      {isCompressing && <p>Compressing your PDF, please wait...</p>}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {compressMessage && <p className="compressMessage">{compressMessage}</p>}
    </div>
  );
};

export default CompressPDF;

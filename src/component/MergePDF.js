import React, { useContext, useState } from 'react';
import { PdfContext } from '../PdfContext';
import '../Css/MergeComponent.css';

const MergePDF = ({ onClose }) => {
  const { pdfFile, setPdfFile, isMerging, setIsMerging } = useContext(PdfContext);
  const [selectedFile1Name, setSelectedFile1Name] = useState('');
  const [selectedFile2Name, setSelectedFile2Name] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(prevState => ({ ...prevState, file1: file }));
      setSelectedFile1Name(file.name);
    } else {
      setPdfFile(prevState => ({ ...prevState, file1: null }));
      setSelectedFile1Name('');
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(prevState => ({ ...prevState, file2: file }));
      setSelectedFile2Name(file.name);
    } else {
      setPdfFile(prevState => ({ ...prevState, file2: null }));
      setSelectedFile2Name('');
    }
  };

  const simulateMergePdfs = () => {
    if (!pdfFile || !pdfFile.file1 || !pdfFile.file2) {
      setErrorMessage('Please select two valid PDF files to merge.');
      return;
    }

    setIsMerging(true);
    setTimeout(() => {
      setIsMerging(false);
      setSuccessMessage('PDFs have been merged successfully (simulated)!');
    }, 2000);
  };

  return (
    <div className="mergePdfComponent featureComponent">
      <button className="closeButton" onClick={onClose}>X</button>
      <h2>Merge PDFs</h2>
      <div className="fileInputContainer">
        <label className="fileLabel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-9.9 9h-2a1 1 0 100 2h2.08A9.959 9.959 0 0012 22a10 10 0 009.9-9h2.1a1 1 0 100-2h-2.1A10 10 0 0012 2zm0 18a8 8 0 01-7.9-7h15.8a8 8 0 01-7.9 7zM8 12H6l6-6 6 6h-2v4h-4v-4z"/>
          </svg>
          <span>{selectedFile1Name ? selectedFile1Name : 'Select PDF 1'}</span>
          <input type="file" accept=".pdf" onChange={handleFileChange1} />
        </label>
        <label className="fileLabel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-9.9 9h-2a1 1 0 100 2h2.08A9.959 9.959 0 0012 22a10 10 0 009.9-9h2.1a1 1 0 100-2h-2.1A10 10 0 0012 2zm0 18a8 8 0 01-7.9-7h15.8a8 8 0 01-7.9 7zM8 12H6l6-6 6 6h-2v4h-4v-4z"/>
          </svg>
          <span>{selectedFile2Name ? selectedFile2Name : 'Select PDF 2'}</span>
          <input type="file" accept=".pdf" onChange={handleFileChange2} />
        </label>
      </div>
      <button className="actionButton" onClick={simulateMergePdfs} disabled={isMerging}>
        {isMerging ? 'Merging...' : 'Merge PDFs'}
      </button>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {successMessage && <p className="successMessage">{successMessage}</p>}
      {isMerging && <p>Merging your PDFs, please wait...</p>}
    </div>
  );
};

export default MergePDF;

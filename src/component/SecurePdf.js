import React, { useContext, useState } from 'react';
import { PdfContext } from '../PdfContext';
import '../Css/SecurePdf.css';

function SecurePdf({ onClose }) {
  const { pdfFile, setPdfFile } = useContext(PdfContext);
  const [password, setPassword] = useState('');
  const [isSecuring, setIsSecuring] = useState(false);
  const [securedPdfUrl, setSecuredPdfUrl] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setSelectedFileName(file.name);
    } else {
      setPdfFile(null);
      setSelectedFileName('');
      alert('Please select a valid PDF file.');
    }
  };

  const handleSetPassword = () => {
    if (!pdfFile) {
      alert('Please select a PDF file first.');
      return;
    }
    if (!password) {
      alert('Please enter a password.');
      return;
    }

    setIsSecuring(true);

    // Simulated securing logic (replace with actual PDF security implementation)
    setTimeout(() => {
      const securedPdfUrl = `data:application/pdf;base64,${btoa('secured pdf data')}`;
      setSecuredPdfUrl(securedPdfUrl);

      setIsSecuring(false);
      alert(`PDF file "${selectedFileName}" secured with password: "${password}"`);
    }, 2000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = securedPdfUrl;
    link.download = 'securedPdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="securePdf featureComponent">
      <button className="closeButton" onClick={onClose}>X</button>
      <h2>Secure PDF</h2>
      <label className="fileLabel" htmlFor="fileInput">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-9.9 9h-2a1 1 0 100 2h2.08A9.959 9.959 0 0012 22a10 10 0 009.9-9h2.1a1 1 0 100-2h-2.1A10 10 0 0012 2zm0 18a8 8 0 01-7.9-7h15.8a8 8 0 01-7.9 7zM8 12H6l6-6 6 6h-2v4h-4v-4z"/>
        </svg>
        <span>{selectedFileName ? selectedFileName : 'Choose file'}</span>
        <input id="fileInput" type="file" accept=".pdf" onChange={handleFileChange} />
      </label>
      <div className="inputContainer">
        <label>Enter Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='inp' />
      </div>
      <button onClick={handleSetPassword} disabled={isSecuring && !pdfFile}>
        {isSecuring ? 'Securing...' : 'Secure PDF'}
      </button>
      {securedPdfUrl && (
        <div className="downloadButtonContainer">
          <button onClick={handleDownload}>Download Secured PDF</button>
        </div>
      )}
    </div>
  );
}

export default SecurePdf;

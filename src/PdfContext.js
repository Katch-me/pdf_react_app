import React, { createContext, useState } from 'react';

export const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  // State variables
  const [pdfFile, setPdfFile] = useState(null);
  const [convertedImages, setConvertedImages] = useState([]);
  const [isMerging, setIsMerging] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressMessage, setCompressMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [editedImageUrl, setEditedImageUrl] = useState('');
  const [securedPdfUrl, setSecuredPdfUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [rotatedPdfUrl, setRotatedPdfUrl] = useState('');
  const [isConverting, setIsConverting] = useState(false);

  return (
    <PdfContext.Provider value={{
      pdfFile, setPdfFile,
      convertedImages, setConvertedImages,
      isMerging, setIsMerging,
      isCompressing, setIsCompressing,
      compressMessage, setCompressMessage,
      imageFile, setImageFile,
      brightness, setBrightness,
      contrast, setContrast,
      editedImageUrl, setEditedImageUrl,
      securedPdfUrl, setSecuredPdfUrl,
      pdfUrl, setPdfUrl,
      rotatedPdfUrl, setRotatedPdfUrl,
      isConverting, setIsConverting
    }}>
      {children}
    </PdfContext.Provider>
  );
};

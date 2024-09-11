import React from 'react';
import PdfToPngConverter from './PdfToPngConverter';
import MergePDF from './MergePDF';
import RotatePDF from './RotatePDF';
import PdfToPpt from './PdfToPpt';

const PDFTools = ({ selectedComponent }) => {
  return (
    <>
      {selectedComponent === 'pdfConversion' && <PdfToPngConverter />}
      {selectedComponent === 'mergePdf' && <MergePDF />}
      {selectedComponent === 'rotatePdf' && <RotatePDF />}
      {selectedComponent === 'pdfToPpt' && <PdfToPpt />}
    </>
  );
};

export default PDFTools;

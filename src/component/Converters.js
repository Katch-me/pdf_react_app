import React from 'react';
import ImageToPdf from './ImageToPdf';
import EditImg from './EditImg';

const Converters = ({ selectedComponent }) => {
  return (
    <>
      {selectedComponent === 'imageToPdf' && <ImageToPdf />}
      {selectedComponent === 'editImage' && <EditImg />}
    </>
  );
};

export default Converters;

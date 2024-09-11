// src/component/MainContent.js

import React, { useRef, useEffect } from 'react';
import PdfToPngConverter from './PdfToPngConverter';
import MergePDF from './MergePDF';
import CompressPDF from './CompressPDF';
import EditImg from './EditImg';
import SecurePdf from './SecurePdf';
import ImageToPdf from './ImageToPdf';
import PdfToPpt from './PdfToPpt';
import RotatePDF from './RotatePDF';
import AddAudioToVideo from './AddAudioToVideo';
import AddImageToVideo from './AddImageToVideo'; // Correct import
import AddTextToVideo from './AddTextToVideo';
import TrimVideo from './TrimVideo';
import ChangeVolume from './ChangeVolume';
import ChangeSpeed from './ChangeSpeed';
import VideoConversion from './VideoConversion';
import VideoEditing from './VideoEditing';
import ScreenRecorder from './ScreenRecorder';
import TextToSpeech from './TextToSpeech';
import MergeVideos from './MergeVideos';
import RemoveLogoFromVideo from './RemoveLogoFromVideo';
import CropVideo from './CropVideo';
import RotateVideo from './RotateVideo';
import FlipVideo from './FlipVideo';
import ResizeVideo from './ResizeVideo';
import LoopVideo from './LoopVideo';
import TrimAudio from './TrimAudio';
import ChangeAudioVolume from './ChangeAudioVolume';
import ChangeAudioSpeed from './ChangeAudioSpeed';
import ChangeAudioPitch from './ChangeAudioPitch';
import Equalizer from './Equalizer';
import ReverseAudio from './ReverseAudio';
import VoiceRecorder from './VoiceRecorder';
import AudioJoiner from './AudioJoiner';
import '../Css/MainContent.css';
import Convert from '../assest/images/Covnert.png';
import MergeImg from '../assest/images/mergepdf.png';
import PdfImg from '../assest/images/pdfimage.png';
import CompressImg from '../assest/images/Compress.png';
import EditImage from '../assest/images/editpdfimg.png';
import SecureImg from '../assest/images/SecurePdf.png';
import PptImg from '../assest/images/pptToPDF.png';
import RotateImg from '../assest/images/rotatePDf.png';
import VideoToolsImg from '../assest/images/VideoToolsImg.jpg'; // Example placeholder image for video tools
import AudioToolsImg from '../assest/images/audioTools.png'; // Example placeholder image for audio tools

function MainContent({ selectedComponent, setSelectedComponent }) {
  const refMap = {
    pdfConversion: useRef(null),
    mergePdf: useRef(null),
    fileCompressor: useRef(null),
    editImage: useRef(null),
    securePdf: useRef(null),
    imageToPdf: useRef(null),
    pdfToPpt: useRef(null),
    rotatePdf: useRef(null),
    addAudioToVideo: useRef(null),
    addImageToVideo: useRef(null),
    addTextToVideo: useRef(null),
    trimVideo: useRef(null),
    changeVolume: useRef(null),
    changeSpeed: useRef(null),
    // videoEditor: useRef(null),
    videoConversion: useRef(null),
    screenRecorder: useRef(null),
    textToSpeech: useRef(null),
    mergeVideos: useRef(null),
    removeLogoFromVideo: useRef(null),
    cropVideo: useRef(null),
    rotateVideo: useRef(null),
    flipVideo: useRef(null),
    resizeVideo: useRef(null),
    loopVideo: useRef(null),
    trimAudio: useRef(null),
    changeAudioVolume: useRef(null),
    changeAudioSpeed: useRef(null),
    changeAudioPitch: useRef(null),
    equalizer: useRef(null),
    reverseAudio: useRef(null),
    voiceRecorder: useRef(null),
    audioJoiner: useRef(null),
  };

  useEffect(() => {
    if (selectedComponent && refMap[selectedComponent]) {
      refMap[selectedComponent].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedComponent]);

  const components = {
    pdfConversion: <PdfToPngConverter onClose={() => setSelectedComponent(null)} />,
    mergePdf: <MergePDF onClose={() => setSelectedComponent(null)} />,
    fileCompressor: <CompressPDF onClose={() => setSelectedComponent(null)} />,
    editImage: <EditImg onClose={() => setSelectedComponent(null)} />,
    securePdf: <SecurePdf onClose={() => setSelectedComponent(null)} />,
    imageToPdf: <ImageToPdf onClose={() => setSelectedComponent(null)} />,
    pdfToPpt: <PdfToPpt onClose={() => setSelectedComponent(null)} />,
    rotatePdf: <RotatePDF onClose={() => setSelectedComponent(null)} />,
    addAudioToVideo: <AddAudioToVideo onClose={() => setSelectedComponent(null)} />,
    addImageToVideo: <AddImageToVideo onClose={() => setSelectedComponent(null)} />,
    addTextToVideo: <AddTextToVideo onClose={() => setSelectedComponent(null)} />,
    trimVideo: <TrimVideo onClose={() => setSelectedComponent(null)} />,
    changeVolume: <ChangeVolume onClose={() => setSelectedComponent(null)} />,
    changeSpeed: <ChangeSpeed onClose={() => setSelectedComponent(null)} />,
    videoEditing: <VideoEditing onClose={() => setSelectedComponent(null)} />,
    videoConversion :<VideoConversion onClose={() => setSelectedComponent(null)} />,
    screenRecorder: <ScreenRecorder onClose={() => setSelectedComponent(null)} />,
    textToSpeech: <TextToSpeech onClose={() => setSelectedComponent(null)} />,
    mergeVideos: <MergeVideos onClose={() => setSelectedComponent(null)} />,
    removeLogoFromVideo: <RemoveLogoFromVideo onClose={() => setSelectedComponent(null)} />,
    cropVideo: <CropVideo onClose={() => setSelectedComponent(null)} />,
    rotateVideo: <RotateVideo onClose={() => setSelectedComponent(null)} />,
    flipVideo: <FlipVideo onClose={() => setSelectedComponent(null)} />,
    resizeVideo: <ResizeVideo onClose={() => setSelectedComponent(null)} />,
    loopVideo: <LoopVideo onClose={() => setSelectedComponent(null)} />,
    trimAudio: <TrimAudio onClose={() => setSelectedComponent(null)} />,
    changeAudioVolume: <ChangeAudioVolume onClose={() => setSelectedComponent(null)} />,
    changeAudioSpeed: <ChangeAudioSpeed onClose={() => setSelectedComponent(null)} />,
    changeAudioPitch: <ChangeAudioPitch onClose={() => setSelectedComponent(null)} />,
    equalizer: <Equalizer onClose={() => setSelectedComponent(null)} />,
    reverseAudio: <ReverseAudio onClose={() => setSelectedComponent(null)} />,
    voiceRecorder: <VoiceRecorder onClose={() => setSelectedComponent(null)} />,
    audioJoiner: <AudioJoiner onClose={() => setSelectedComponent(null)} />,
  };

  return (
    <section id="features" className="features">
      {selectedComponent ? (
        <div ref={refMap[selectedComponent]} className='components'>
          {components[selectedComponent]}
        </div>
      ) : (
        <>
          <div className="Conversion" onClick={() => setSelectedComponent('pdfConversion')} ref={refMap.pdfConversion}>
            <img src={Convert} alt="Convert" className="img1" />
            <h2>PDF Conversion</h2>
            <p>Convert your documents to and from PDF format effortlessly. Supported formats include Word, Excel, PowerPoint, and more.</p>
          </div>

          <div className="Merge" onClick={() => setSelectedComponent('mergePdf')} ref={refMap.mergePdf}>
            <img src={MergeImg} alt="Merge" className="img2" />
            <h2>Merge PDFs</h2>
            <p>Easily merge multiple PDF files into a single document or split a large PDF into smaller files.</p>
          </div>

          <div className="Compress" onClick={() => setSelectedComponent('fileCompressor')} ref={refMap.fileCompressor}>
            <img src={CompressImg} alt="Compress" className="img3" />
            <h2>Compress PDFs</h2>
            <p>Reduce the size of your PDF files while maintaining the quality, making them easier to share and store.</p>
          </div>

          <div className="EditImg" onClick={() => setSelectedComponent('editImage')} ref={refMap.editImage}>
            <img src={EditImage} alt="Edit" className="img4" />
            <h2>Edit Image</h2>
            <p>Edit your images with ease using our editing tools.</p>
          </div>

          <div className="SecurePdf" onClick={() => setSelectedComponent('securePdf')} ref={refMap.securePdf}>
            <img src={SecureImg} alt="Secure PDF" className="img5" />
            <h2>Secure PDF</h2>
            <p>Secure your PDF files with password protection and encryption.</p>
          </div>

          <div className="ImageToPdf" onClick={() => setSelectedComponent('imageToPdf')} ref={refMap.imageToPdf}>
            <img src={PdfImg} alt="Image to PDF" className="img6" />
            <h2>Image to PDF</h2>
            <p>Convert your images into PDF format quickly and easily.</p>
          </div>

          <div className="PdfToPpt" onClick={() => setSelectedComponent('pdfToPpt')} ref={refMap.pdfToPpt}>
            <img src={PptImg} alt="PDF to PPT" className="img7" />
            <h2>PDF to PPT</h2>
            <p>Convert your PDF documents to PowerPoint presentations.</p>
          </div>

          <div className="RotatePdf" onClick={() => setSelectedComponent('rotatePdf')} ref={refMap.rotatePdf}>
            <img src={RotateImg} alt="Rotate PDF" className="img8" />
            <h2>Rotate PDF</h2>
            <p>Rotate your PDF pages to the desired orientation.</p>
          </div>

          <div className="VideoTools" onClick={() => setSelectedComponent('addAudioToVideo')} ref={refMap.addAudioToVideo}>
            <img src={VideoToolsImg} alt="Video Tools" className="img9" />
            <h2>Video Tools</h2>
            <p>Tools for editing and managing video files.</p>
          </div>

          <div className="AudioTools" onClick={() => setSelectedComponent('trimAudio')} ref={refMap.trimAudio}>
            <img src={AudioToolsImg} alt="Audio Tools" className="img10" />
            <h2>Audio Tools</h2>
            <p>Tools for editing and managing audio files.</p>
          </div>
        </>
      )}
    </section>
  );
}

export default MainContent;

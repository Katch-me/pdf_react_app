import React, { useState } from 'react';
import '../Css/Header.css'; // Ensure this path is correct
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginSignupForm from './LoginSignupForm';

function Header({ onSelectMenu }) {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(false);

  const toggleMenuIcon = () => {
    setIsMenuIcon(!isMenuIcon);
  };

  const toggleDropdown = (menu) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setSelectedMenu(null);
  };

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  const handleMenuClick = (menu) => {
    onSelectMenu(menu);
    closeDropdowns();
  };

  const menus = [
    {
      id: 'pdfTools',
      label: 'PDF Tools',
      options: [
        { id: 1, label: 'PDF Conversion', link: 'pdfConversion' },
        { id: 2, label: 'Merge PDF', link: 'mergePdf' },
        { id: 3, label: 'Rotate PDF', link: 'rotatePdf' },
        { id: 4, label: 'PDF to PPT', link: 'pdfToPpt' },
      ],
    },
    {
      id: 'converters',
      label: 'Converters',
      options: [
        { id: 1, label: 'Image to PDF', link: 'imageToPdf' },
        { id: 2, label: 'Edit Image', link: 'editImage' },
      ],
    },
    {
      id: 'utilities',
      label: 'Utilities',
      options: [
        { id: 1, label: 'File Compressor', link: 'fileCompressor' },
        { id: 2, label: 'Secure PDF', link: 'securePdf' },
      ],
    },
    {
      id: 'videoTools',
      label: 'Video Tools',
      options: [
        { id: 1, label: 'Video Conversion', link: 'videoConversion' },
        { id: 2, label: 'Video Editing', link: 'videoEditing' },
        { id: 3, label: 'Screen Recorder', link: 'screenRecorder' },
        { id: 4, label: 'Add Audio to Video', link: 'addAudioToVideo' },
        { id: 5, label: 'Add Image to Video', link: 'addImageToVideo' },
        { id: 6, label: 'Add Text to Video', link: 'addTextToVideo' },
        { id: 7, label: 'Remove Logo from Video', link: 'removeLogoFromVideo' },
        { id: 8, label: 'Crop Video', link: 'cropVideo' },
        { id: 9, label: 'Rotate Video', link: 'rotateVideo' },
        { id: 10, label: 'Flip Video', link: 'flipVideo' },
        { id: 11, label: 'Resize Video', link: 'resizeVideo' },
        { id: 12, label: 'Loop Video', link: 'loopVideo' },
        { id: 13, label: 'Change Volume', link: 'changeVolume' },
        { id: 14, label: 'Change Speed', link: 'changeSpeed' },
        { id: 15, label: 'Text to Speech', link: 'textToSpeech' },
        { id: 16, label: 'Merge Videos', link: 'mergeVideos' },
      ],
    },
    {
      id: 'audioTools',
      label: 'Audio Tools',
      options: [
        { id: 1, label: 'Trim Audio', link: 'trimAudio' },
        { id: 2, label: 'Change Audio Volume', link: 'changeAudioVolume' },
        { id: 3, label: 'Change Audio Speed', link: 'changeAudioSpeed' },
        { id: 4, label: 'Change Audio Pitch', link: 'changeAudioPitch' },
        { id: 5, label: 'Equalizer', link: 'equalizer' },
        { id: 6, label: 'Reverse Audio', link: 'reverseAudio' },
        { id: 7, label: 'Voice Recorder', link: 'voiceRecorder' },
        { id: 8, label: 'Audio Joiner', link: 'audioJoiner' },
      ],
    },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href='/'><h1 className="logo">PDF.io Clone</h1></a>
        <button className="menu-toggle" onClick={toggleMenuIcon}>
          {isMenuIcon ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMenuIcon ? 'open' : ''}`}>
          <ul className="menu">
            {menus.map((menu) => (
              <li key={menu.id} className="menu-item">
                <button className="menu-button" onClick={() => toggleDropdown(menu.id)}>
                  {menu.label}
                </button>
                {selectedMenu === menu.id && (
                  <ul className={`dropdown-menu ${menu.id === 'videoTools' ? 'scrollable-menu' : ''}`}>
                    {menu.options.map((option) => (
                      <li key={option.id}>
                        <a onClick={() => handleMenuClick(option.link)} className="menu-item-btn">
                          {option.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="menu-item">
              <button className="login-button" onClick={toggleLoginForm}>Login</button>
            </li>
          </ul>
        </nav>
        {isLoginFormOpen && <LoginSignupForm closeForm={toggleLoginForm} />}
      </div>
    </header>
  );
}

export default Header;

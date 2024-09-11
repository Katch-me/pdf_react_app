import React, { useState } from 'react';
import '../Css/HomeSection.css';

const HomeSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Manage Your PDFs Efficiently</h1>
        <p className="hero-description">
          Convert, merge, split, and compress PDF files with ease using our comprehensive online tools.
        </p>
        <button className="hero-button" onClick={handleClick}>Get Started</button>
        {showMessage && (
          <p className="successMessage">Welcome! You are about to manage your PDFs efficiently.</p>
        )}
      </div>
    </section>
  );
};

export default HomeSection;

import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import HomeSection from './component/HomeSection';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import { PdfProvider } from './PdfContext';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectMenu = (menu) => {
    setSelectedComponent(menu);
  };

  return (
    <div className="App">
      <Header onSelectMenu={handleSelectMenu} />
      <HomeSection />
      <PdfProvider>
        <MainContent
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </PdfProvider>
      <Footer />
    </div>
  );
}

export default App;

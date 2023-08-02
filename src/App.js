import React, { useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const scanRef = useRef(null);

  const setScanHeight = () => {
    if (scanRef.current) {
      const pageContentHeight = document.body.scrollHeight;
      scanRef.current.style.height = pageContentHeight + 'px';
    }
  };

  useEffect(() => {
    // Call setScanHeight when the component is mounted and whenever the window is resized
    setScanHeight();
    window.addEventListener('resize', setScanHeight);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', setScanHeight);
    };
  }, []);

  return (
    <div className="pageTheme crt">
      <div className="scan" ref={scanRef}></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React, { useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className="pageTheme crt">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <div className="scan"></div>
    </div>
  );
}

export default App;

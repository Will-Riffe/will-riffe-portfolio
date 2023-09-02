import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import "./styles/animations.css";
import "./styles/styles.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="pageTheme crt">
      <header className="main crt">
        <h1>Will Riffe</h1>
        <p>Software Developer</p>
      </header>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

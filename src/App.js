import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/animations.css";
import "./styles/styles.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <body className="pageTheme crt">
      <header className="main crt">
        <h1>Will Riffe</h1>
        <p>Software Developer</p>
      </header>
      <main>
        <Router>
          <NavBar />
          <Routes>
          </Routes>
        </Router>
        <section className="show-border main-content"></section>
      </main>
    </body>
  );
}

export default App;

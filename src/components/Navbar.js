import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">

        {/* responsive accordian */}
        <div className="toggleButton">
            <button></button>
        </div>

        {/* navbar links */}
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>

    </div>
  )
}

export default Navbar
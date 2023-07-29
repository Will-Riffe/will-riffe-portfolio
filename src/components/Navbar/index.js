import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder";


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    const noNavbar = location.pathname === '/';

    {/* Here useEffect collapses accordian as user navigates pages*/}
    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);

    if (noNavbar) {
        return null; // doesn't render nav on home page
    }
    
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

        {/* responsive accordian */}
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                <ReorderIcon />
            </button>
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
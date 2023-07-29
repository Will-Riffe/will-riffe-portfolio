import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


function Footer() {
  const location = useLocation();
  const noFooter = location.pathname === '/';
  
  if (noFooter) {
    return null; // doesn't render footer on home page
  }

  return (
    <div className="footer">
        <h3><em>Follow me on Social Media</em></h3>
            <div className="socialMedia"> 
                <GitHubIcon />
                <SportsEsportsIcon />
            </div>
      <p> &copy; 2023 Will Riffe's Portfolio </p>

    </div>
  )
}

export default Footer
import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


function Footer() {
  return (
    <div className="footer">
        <h3><em>Follow us on Social Media</em></h3>
            <div className="socialMedia"> 
                <GitHubIcon />
                <SportsEsportsIcon />
            </div>
      <p> &copy; 2023 Will Riffe's Portfolio </p>

    </div>
  )
}

export default Footer
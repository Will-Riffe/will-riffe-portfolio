import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const location = useLocation();
  const noFooter = location.pathname === "/";
  /*
  if (noFooter) {
    return null; // doesn't render footer on home page
  }
  */
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>
          <em>Follow me on Social Media</em>
        </h3>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/w-r/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Will-Riffe">
            <GitHubIcon />
          </a>
          <a href="https://discordapp.com/users/444634944598441987">
            <SportsEsportsIcon />
          </a>
        </div>
        <p>&copy; 2023 Will Riffe's Portfolio</p>
      </div>
    </div>
  );
}

export default Footer;

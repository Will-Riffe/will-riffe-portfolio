import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom"; 
import LogoImage from "../../assets/WillsIcon.png";
import "./Home.css";

function Home() {
  return (
    <Grid
      container
      className="home"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} textAlign="center">
        <h1>Will Riffe</h1>
        <h2>Web Developer</h2>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <img src={LogoImage} alt="Logo depicting a gathering of people." />
      </Grid>

      <Grid item xs={12} md={6} textAlign="center">
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="buttonStyle">CONTACT</div>
        </Link>
      </Grid>

      <Grid item xs={12} md={6} textAlign="center">
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <div className="buttonStyle">PORTFOLIO</div>
        </Link>
      </Grid>

      <Grid item xs={12} md={6} textAlign="center">
        <Link to="/resume" style={{ textDecoration: "none" }}>
          <div className="buttonStyle">RÉSUMÉ</div>
        </Link>
      </Grid>

      <Grid item xs={12} md={6} textAlign="center">
        <Link to="/#" style={{ textDecoration: "none" }}>
          <div className="activeStyle">ABOUT</div>
        </Link>
      </Grid>

      {/* New Grid item for "About Me" section */}
      <Grid item xs={12} md={8} textAlign="center">
        <div className="aboutSection">
          <h3>About Me</h3>
          <p>
            Insert your "About Me" content here. This is where you can write a brief introduction about yourself, your skills, and your interests as a web developer.
          </p>
        </div>
      </Grid>

    </Grid>
  );
}

export default Home;

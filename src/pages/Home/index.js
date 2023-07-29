import React from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import the Link component
import LogoImage from '../../assets/WillsIcon.png';
import './Home.css';

function Home() {
  return (
    <Grid container className="home" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} textAlign="center">
        <h1>Will Riffe</h1>
        <h2>Web Developer</h2>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <img src={LogoImage} alt="Logo depicting a gathering of people." />
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">

        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <Button className="buttonStyle">
            PROJECTS
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Link to="/experience" style={{ textDecoration: 'none' }}>
        <Button className="buttonStyle">
            EXPERIENCE
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Link to="/contact" style={{ textDecoration: 'none' }}>
        <Button className="buttonStyle">
            CONTACT
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;

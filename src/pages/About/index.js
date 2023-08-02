import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './about.css';
import profilePic from '../../assets/Will Riffe.jpeg';



function About() {
  return (
    <div className="body1">
      <div className='profile-container'>
        <img src={profilePic} alt="profile picture" className="profile-picture"/>
      </div>
      <div className='content-container'>
      <div className='headline'>
        <Typography variant="h4" >
          Beyond the Screen—
        </Typography>
      </div>
      <br/>
      <Typography variant="body1" gutterBottom>
        My name is Will Riffe, a motivated, junior full-stack developer with a background in lapidary art and asbestos testing. While the initial allure of the field was the potential for a rewarding career, I've discovered a deeper connection to it as I progress in my journey. Just like crafting gemstones or conducting meticulous asbestos assessments, full-stack development allows me to create intriguing and informative products that captivate and empower users.
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
        My coding journey began when I enrolled in a Coursera course on front-end development. Witnessing how code could transform a webpage's layout—especially with challenging elements like carousels—ignited my passion for coding and web development.
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
        One of my most challenging projects involved integrating Google Maps and TicketMasters' API to display event locations from JSON. Determination, continuous development, and rigorous testing enabled me to successfully render ticketmaster event locations on Google Maps, achieving the desired outcome.
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
        I take some pride in my brainchild project, 'Permu-Tater'. This was a site initially inspired by my ex, as I would cook for her on Monday nights. I was often trying to think of new dishes to cook for her. This innovative project retrieves recipes from a third-party API (Themealdb) and recombines the ingredients against an extensive JSON ingredients list to create unique and exciting recipes, stored in a MySQL relational database.
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
        Since most of my experience has been with Rutgers bootcamps, my coding focus has mostly been with JavaScript, HTML, and CSS. I stay engaged with the developer community by reading articles and blogs to stay updated, and I would like to contribute to open-source projects in the near future.
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
        From a coding perspective, I try to build maintainable, scalable code. I enjoy orchestrating projects and thrive on setting goals with structured schedules. Embracing continuous learning, I emphasize user-friendliness, accessibility, and security. Empathy drives my successful software solutions, as I have plenty enough to keep both the user and my teammates in mind. As a full-stack developer, I seek fulfilling opportunities to build a better digital world with like-minded collaborators and strive to do so.
      </Typography>

      </div>
    </div>
  );
}

About.propTypes = {};

export default About;

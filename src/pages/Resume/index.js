import React from 'react';
import pageOne from '../../assets/Resume Will Riffe 8.2.2024-1.jpg';
import pageTwo from '../../assets/Resume Will Riffe 8.2.2024-2.jpg';
import './Resume.css';

function MyPortfolio() {
  const googleDocsUrl = 'https://docs.google.com/document/d/1kZvYRDI6rZwFIeX7h79hbJJCIq6FpUi1/edit?usp=sharing&ouid=117525258448058942395&rtpof=true&sd=true';

  return (
    <div className="pdf-container">


      <a 
        href={googleDocsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="pdf-page">
        <img
          src={pageOne}
          alt="Resume Page 1"/>
      </a>


      <a 
        href={googleDocsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="pdf-page">
        <img
          src={pageTwo}
          alt="Resume Page 2"
        />
      </a>


    </div>
  );
}

export default MyPortfolio;

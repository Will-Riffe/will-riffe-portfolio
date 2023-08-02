import React from 'react';
import { Document, Page } from 'react-pdf';
import resumePDF from '../../assets/Resume_Will_Riffe_8.2.2024.pdf';
import './Resume.css';

function Resume() {
  return (
    <div>
      <h1>Your Resume</h1>
      <div className="pdf-container">
        <Document file={resumePDF}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;

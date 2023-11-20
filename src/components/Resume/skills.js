import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJs,
    faNode,
    faSquareGit,
    faGithub,
    faReact,
    faBootstrap,
    faSquareFontAwesome,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    
    <div>
        <h1>skills</h1>
        <FontAwesomeIcon icon={faHtml5} className="social-icons"/>
        <FontAwesomeIcon icon={faCss3} className="social-icons"/>
        <FontAwesomeIcon icon={faJs} className="social-icons"/>
        <FontAwesomeIcon icon={faNode} className="social-icons"/>
        <FontAwesomeIcon icon={faSquareGit} className="social-icons"/>
        <FontAwesomeIcon icon={faGithub} className="social-icons"/>
        <FontAwesomeIcon icon={faReact} className="social-icons"/>
        <FontAwesomeIcon icon={faBootstrap} className="social-icons"/>
        <FontAwesomeIcon icon={faSquareFontAwesome} className="social-icons"/>
        <div>
        <a
        href="https://docs.google.com/document/d/1Vje3AEc4ljenISyJjLVpy9ByVyoiplgE/edit?usp=sharing&ouid=117525258448058942395&rtpof=true&sd=true"
        target="_blank"
        >
        <h2> View a scanable version of my Resume here!</h2>
        </a>
    </div>

    </div>     
      
  )
}

export default Skills;
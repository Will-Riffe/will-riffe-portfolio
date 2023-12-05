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
    
    <div  className="center">
        <div>
            <h2>Familiar Technologies/Frameworks</h2>
            <div className="center-row">
                <FontAwesomeIcon icon={faHtml5} title="HTML5" className="social-icons"/>
                <FontAwesomeIcon icon={faCss3} title="CSS3" className="social-icons"/>
                <FontAwesomeIcon icon={faJs} title="JavaScript ES6" className="social-icons"/>
                <FontAwesomeIcon icon={faNode} title="Node.JS" className="social-icons"/>
                <FontAwesomeIcon icon={faSquareGit} title="Git" className="social-icons"/>
            </div>
            <div className="center-row">
                <FontAwesomeIcon icon={faGithub} title="GitHub" className="social-icons"/>
                <FontAwesomeIcon icon={faReact} title="React" className="social-icons"/>
                <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" className="social-icons"/>
                <FontAwesomeIcon icon={faSquareFontAwesome} title="FontAwesome" className="social-icons"/>
            </div>

            <div>
                <h2>Soft Skills</h2>
                <h3>Object Oriented Programming (OOP)</h3>
                <h3>Object-Relational Mapping (ORM)</h3>
                <h3>Model-View-Control (MVC)</h3>
                <h3>Responsive Web Design</h3>
                <h3>Problem Solving Skills</h3>
                <h3>Attention to Detail</h3>
                <h3>Strong Communication Skills</h3>
                <br/>
            </div>
            <div>
                <a
                href="https://docs.google.com/document/d/1Vje3AEc4ljenISyJjLVpy9ByVyoiplgE/edit?usp=sharing&ouid=117525258448058942395&rtpof=true&sd=true"
                target="_blank"
                >
                 <h2> View my full resumé here</h2>
                </a>
            </div>
        </div>

    </div>     
      
  )
}

export default Skills;
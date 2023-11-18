import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectView(props) {
  return (
    <>
      <div className="titleRow">
        <h1>{props.name}</h1>
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>

      <div className="portfolio">
        <a className="squeezeIn" href={props.link} target="_blank">
          <img src={props.src} alt="Project Screenshot" />
        </a>
        <div>
          <div className="technologies">
            <div>
              <h3 className="projectView">Technologies Used:</h3>
              <ul>
                {props.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
                <br />
            </div>
            <div>
              <h3>Description:</h3>
              <p className="portfolio">{props.description}</p>
            </div>
          </div>
          <br />
          <br />
      </div>
    </div>
    <br />
    </>
  );
}

export default ProjectView;

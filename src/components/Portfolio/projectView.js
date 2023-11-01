import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectView(props) {
  return (
    <>
      <br />
        <div className="titleRow">
          <h1>{props.name}</h1>

          <a 
              href={props.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
          >
              <GitHubIcon />
          </a>
        </div>
      <div className="portfolio smallScroll">


        <a  className="squeezeIn"
            href={props.link} 
            target="_blank"
        >
            <img src={props.src} alt="Project Screenshot" />
        </a>

        <p
            className="portfolio"
        >
          {props.description}
        </p>

      </div>
    </>
  );
}

export default ProjectView;
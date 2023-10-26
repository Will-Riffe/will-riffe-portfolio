import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectView(props) {

    return (
        <>
          <div>
            <h1>{props.name}</h1>
            <a href={props.link}>
                <img 
                    src={props.src} 
                    href={props.link} 
                    alt="Project Screenshot">
                </img>
            </a>
          </div>
          <a 
            alt="Deployed Site">
            <GitHubIcon></GitHubIcon>
          </a>
          <p>{props.description}</p>
        </>
      );
}

export default ProjectView;






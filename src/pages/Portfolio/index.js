import React from 'react';
import PortfolioItem from '../../components/ProjectItem';
import PortfolioList from '../../helpers/PortfolioList';
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h1><a href="https://sustain-a-plate-a492ad2a8239.herokuapp.com/">Link To My Latest Project: Sustain-A-Plate</a> <br/> </h1>
      <div className="portfolioList">
        {PortfolioList.map((project, idx) => {
          return (
            <PortfolioItem key={idx} name={project.name} image={project.image} href={project.link} />
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio;
import React from 'react';
import PortfolioItem from '../../components/ProjectItem';
import PortfolioList from '../../helpers/PortfolioList';
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h1>~ My Projects ~</h1>
      <div className="portfolioList">
        {PortfolioList.map((project, idx) => {
          return (
            <PortfolioItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio;
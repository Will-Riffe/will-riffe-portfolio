import React from 'react'

function Portfolio(props) {
  return (
    <section className="show-border main-content">
      <header className="show-border ">
        <div className="content-header">Portfolio</div>
      </header>
      <article>
        <nav className="article-nav show-border">
          <button className="article-crumb ">
            <h4>Featured Projects</h4>
          </button>
          <h4 className="divider">|</h4>
          <button className="article-crumb">
            <h4>Professional Projects</h4>
          </button>
          <h4 className="divider">|</h4>
          <button className="article-crumb">
            <h4>School Projects</h4>
          </button>
        </nav>
      </article>
    </section>
)}
export default Portfolio;
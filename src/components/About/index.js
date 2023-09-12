import React from "react";

function About(props) {
  return (
    <section className="show-border main-content">
      <header className="show-border ">
        <div className="content-header">About</div>
      </header>
      <article>
        <nav className="article-nav show-border">
          <button className="article-tab">
            <h4>General</h4>
          </button>
          <h4 className="divider">|</h4>
          <button className="article-tab">
            <h4>Blog</h4>
          </button>
        </nav>
      </article>
    </section>
  );
}
export default About;

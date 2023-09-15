import React from "react";
import General from "./general.js";

function About(props) {
  return (
    <section className="show-border main-content">
      <header className="show-border ">
        <div className="content-header">About</div>
      </header>
      <article>
        <nav className="article-nav show-border">
          <button className="article-tab-active">
            <h4>General</h4>
          </button>
          <h4 className="divider">|</h4>
          <button className="article-tab">
            <h4>
              <s>Blog</s> Work in Progress
            </h4>
          </button>
        </nav>
        <General />
      </article>
    </section>
  );
}
export default About;

import React, { useState } from "react";
import "./styles.css";
import Featured from "./featured";

function Portfolio(props) {

  return (
    <section className="main-content">
      <header>
        <div className="content-header">
          Portfolio
        </div>
      </header>
      <article>
          <nav className="article-nav">
            <div className=" article-active">
              <h4>A Few Select Projects</h4>
            </div>
          </nav>
          < Featured />
      </article>
    </section>
  );
}

export default Portfolio;

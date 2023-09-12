import React from "react";

function Resume(props) {
  return (
    <section className="show-border main-content">
      <header className="show-border ">
        <div className="content-header">Resume</div>
      </header>
      <h1>Something Wicked this way comes!</h1>
      <div className="temp-center">
        <h2>This page is a work in progress</h2>
        <h2>In the meantime, view my resume here:</h2>
        <h3>
          <a
            href="https://docs.google.com/document/d/1Vje3AEc4ljenISyJjLVpy9ByVyoiplgE/edit?usp=sharing&ouid=117525258448058942395&rtpof=true&sd=true"
            target="_blank"
          >
            Click Here!
          </a>
        </h3>
      </div>
    </section>
  );
}
export default Resume;

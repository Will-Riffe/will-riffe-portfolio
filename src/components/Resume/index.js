import React, { useState } from "react";
import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";
import Hobbies from "./hobbies";

import "./styles.css";

function Resume(props) {
      
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", component: <Skills /> },
    { id: "exp", label: "Experience", component: <Experience />},
    { id: "education", label: "Education", component: <Education />},
    { id: "hobbies", label: "Hobbies", component: <Hobbies />}
    ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="main-content">
      <header>
        <div className="content-header">Resume</div>
      </header>
      <article>
        <nav className="article-nav hiddie-pants">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.id}>
                {index !== 0 && <h4 className="divider">|</h4>}
                <button
                  className={`article-tab ${
                    activeTab === tab.id ? "article-tab-active" : ""
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <h4>{tab.label}</h4>
                </button>
              </React.Fragment>
            ))}
          </nav>
          <div className="content smallScroll">
            {tabs.find((tab) => tab.id === activeTab).component}
          </div>
      </article>
    </section>
  );
}
export default Resume;

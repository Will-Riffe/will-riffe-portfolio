import React, { useState } from "react";
import General from "./general.js";

function About(props) {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", to: "general-content" },
    { id: "blog", label: "Blog", to: "blog-content"},
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="main-content">
      <header>
        <div className="content-header">About</div>
      </header>
      <article>
        <nav className="article-nav">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              {index !== 0 && <h4 className="divider">|</h4>}
              <button
                className={`article-tab ${
                  activeTab === tab.id ? "article-tab-active" : ""
                }`}
                onClick = {() => handleTabClick(tab.id)}
              >
                <h4>{tab.label}</h4>
              </button>
            </React.Fragment>
          ))}
        </nav>
      <General />
      </article>
    </section>
  );
}
export default About;

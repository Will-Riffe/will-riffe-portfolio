import React, { useState } from "react";

function Portfolio(props) {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { id: "featured", label: "Featured Projects", to: "featured-content" },
    {
      id: "professional",
      label: "Professional Projects",
      to: "professional-content",
    },
    { id: "school", label: "School Projects", to: "school-content" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="main-content">
      <header>
        <div className="content-header">Portfolio</div>
      </header>
      <article>
        <nav className="article-nav">
          {tabs.map((tab, index) => (          /* iterate over tab array, generates JSX elements for each tab Groups
                                                  the elements together and adds vertical divider after the first tab */
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
        <div className="content"></div>
      </article>
    </section>
  );
}

export default Portfolio;

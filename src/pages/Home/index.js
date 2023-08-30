import React, { useState } from "react";
import "./styles.css";

function Home(props) {
  const buttonData = [
    { id: "about", label: "ABOUT" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "contact", label: "CONTACT" },
    { id: "resume", label: "RESUME" },
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <body>
      <header className="main crt">
        <h1>Will Riffe</h1>
        <p>Software Developer</p>
      </header>
      <main>

        <nav className="plain sagely show-border">

          {buttonData.map((button) => (
            <button
              key={button.id}
              className={`main-btn ${
                activeButton === button.id ? "active" : ""
                }`}
              onClick={() => handleButtonClick(button.id)}
            >
              <h4>{button.label}</h4>
            </button>
          ))}

        </nav>
        <section className="show-border reactor">

        </section>
      </main>
    </body>
  );
}

export default Home;

import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./navBar.css";

function NavBar(props) {

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
<nav  className="plain navContainer show-border">

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

<section className="show-border expressive-content">
      <h1>CONTENT COMING SOON</h1>
</section>

</nav>
);
    }

export default NavBar;
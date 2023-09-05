import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navBar.css";

function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const buttonData = [
    { id: "about", label: "ABOUT", to: "/" },
    { id: "portfolio", label: "PORTFOLIO", to: "/portfolio" },
    { id: "contact", label: "CONTACT", to: "/contact" },
    { id: "resume", label: "RESUME", to: "/resume" },
  ];

  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const currentButton = buttonData.find((button) => location.pathname === button.to);
    if (currentButton) {
      setActiveButton(currentButton.id);
    } else {
      setActiveButton('about');
      navigate('/');
    }
  }, [location.pathname]);


  return (
    <nav className="plain navContainer show-border">
      {buttonData.map((button) => (
        <button
          key={button.id}
          className={`main-btn ${activeButton === button.id ? "active" : ""}`}
          onClick={() => navigate(button.to)}
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

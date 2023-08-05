import React from "react";
import { useNavigate } from 'react-router-dom';

function PortfolioItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div 
      className="portfolioItem"
      onClick={() => {
        navigate("/portfolio/" + id);
      }}
    >
      <div 
        style={{backgroundImage: `url(${image})`}} 
        className="image"
      />
      <h1> {name} </h1>
    </div>
  );
}

export default PortfolioItem;

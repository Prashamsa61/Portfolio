// PortfolioButton.js

import React from "react";

const PortfolioButton = () => {
  const handlePortfolioClick = (e) => {
    e.preventDefault();
    window.location.href = "/about"; 
  };

  return (
    <a
      href="/about"
      className="text-gradient btn-link p-3"
      onClick={handlePortfolioClick}
    >
      My Portfolio
    </a>
  );
};

export default PortfolioButton;

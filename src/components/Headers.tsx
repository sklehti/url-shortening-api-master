import React from "react";

const Headers = () => {
  const handleNavigation = () => {
    console.log("Otsikot tänne.");
  };

  return (
    <div className="header-layout">
      <div>
        <h1>Shortly</h1>
      </div>
      <button onClick={handleNavigation} className="nav-button">
        <div className="nav-mobile-1"></div>
        <div className="nav-mobile-2"></div>
        <div className="nav-mobile-1"></div>
        <div className="nav-mobile-2"></div>
        <div className="nav-mobile-1"></div>
      </button>
    </div>
  );
};

export default Headers;

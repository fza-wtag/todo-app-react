import React from "react";
import splashLogo from "icons/sideLogo.svg";
import "styles/splashScreen.css";

function SplashScreen() {
  return (
    <div className="splash-screen" data-testid="splash-screen">
      <div className="loading-bar"></div>
      <img src={splashLogo} alt="icon"></img>
    </div>
  );
}

export default SplashScreen;

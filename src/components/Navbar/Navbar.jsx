import React, { useState } from "react";
import "./navbar.scss";
import techoverLogo from "../../assets/techover-logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <h2>The Flag App</h2>
        <img src={techoverLogo} className="logo" alt="techover-logo" />
        {darkMode ? (
          <div
            className="darkModeBtnContainer"
            onClick={() => setDarkMode(!darkMode)}
          >
            <DarkModeIcon />
            <button>DARK MODE</button>
          </div>
        ) : (
          <div
            className="darkModeBtnContainer"
            onClick={() => setDarkMode(!darkMode)}
          >
            <LightModeIcon />
            <button>LIGHT MODE</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

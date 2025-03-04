import React, { useEffect, useState } from "react";
import "./navbar.scss";
import techoverLogo from "../../assets/techover-logo.png";
import techoverLogoDark from "../../assets/techover-logo-dark.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [darkMode]);

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <h2>The Flag App</h2>
        <img
          src={darkMode ? techoverLogo : techoverLogoDark}
          className="logo"
          alt="techover-logo"
        />
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

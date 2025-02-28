import React from "react";
import "./navbar.scss";
import techoverLogo from "../../assets/techover-logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <h2>The Flag App</h2>
        <img src={techoverLogo} className="logo" alt="techover-logo" />
        <div className="darkModeBtnContainer">
          <LightModeIcon />
          <button>DARK MODE</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

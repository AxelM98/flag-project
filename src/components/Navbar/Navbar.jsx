import React from "react";
import "./navbar.scss";
import techoverLogo from "../../assets/techover-logo.png";
import moon from "../../assets/moon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <h2>The Flag App</h2>

        <img src={techoverLogo} className="logo" alt="techover-logo" />

        <div className="darkModeBtnContainer">
          <img src={moon} alt="moon" />
          <button>DarkMode</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

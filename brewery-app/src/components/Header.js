import { NavLink } from "react-router-dom";
import React from "react";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <DarkMode />
      </nav>
      <ul>
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>

        <NavLink to="/breweries">
          <li>BREWERIES</li>
        </NavLink>

        <div className="headerImage"></div>

        <NavLink to="/news">
          <li>NEWS</li>
        </NavLink>

        {/* <img className="headerImage" src={"./images/icons/JAGS-header/JAGStransparent.png'/"} /> */}

        <NavLink to="/about">
          <li>ABOUT US</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;

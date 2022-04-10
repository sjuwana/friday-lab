import { NavLink } from "react-router-dom";
import React from "react";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="header">
      <nav>
        
        <DarkMode />
      
      <ul>
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>

        <NavLink to="/breweries">
          <li>BREWERIES</li>
        </NavLink>

        <NavLink to="/news">
          <li>NEWS</li>
        </NavLink>

        <NavLink to="/about">
          <li>ABOUT US</li>
        </NavLink>
      </ul>

      </nav>
    </div>
  );
};

export default Header;

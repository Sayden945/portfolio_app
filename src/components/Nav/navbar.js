import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navMenu">
        <NavLink to="/" className="menuListItems">
          Home
        </NavLink>
        <NavLink to="/portfolio" className="menuListItems">
          Portfolio
        </NavLink>
        <NavLink to="/about" className="menuListItems">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

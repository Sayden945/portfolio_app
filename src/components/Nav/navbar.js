import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="menuListItems">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="menuListItems">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="menuListItems">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="menuListItems">
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

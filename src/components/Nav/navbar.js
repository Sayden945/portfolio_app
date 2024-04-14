import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navMenu">
        <Link className="menuListItems">Home</Link>
        <Link className="menuListItems">About</Link>
        <Link className="menuListItems">Portfolio</Link>
        <Link className="menuListItems">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

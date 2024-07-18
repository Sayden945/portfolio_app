import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./terminal.css";

function TerminalNav() {
  return (
    <div id="terminal-tabs">
      <div className="terminal-panels">
        <NavLink to="/">&lt; Home / &gt;</NavLink>
        <NavLink to="/about">&lt; About &gt;</NavLink>
        <NavLink to="/projects">&lt; Work &gt;</NavLink>
        <NavLink to="/skills">&lt; Skills &gt;</NavLink>
      </div>
      <div className="terminal-buttons">
        <button type="button">
          <FontAwesomeIcon icon={faWindowMinimize} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

export default TerminalNav;

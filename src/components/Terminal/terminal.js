import React from "react";
import { Route, Routes } from "react-router-dom";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import About from "../About/about";
import Home from "../Home/home";
import "./terminal.css";
import TerminalNav from "./terminalNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

function Terminal() {
  return (
    <div className="content">
      <div>
        <TerminalNav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
        </Routes>
      </div>

      {/* <div id="stdin">
        <span>
          C:\User\Guest <FontAwesomeIcon icon={faChevronRight} />
          <span className="text">
            <FontAwesomeIcon icon={faWindowMinimize} />{" "}
          </span>
        </span>
      </div> */}
    </div>
  );
}

export default Terminal;

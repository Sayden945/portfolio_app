import React from "react";
import Clock from "./clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import "./home.css";

const Footer = () => {
  return (
    <footer>
      <div id="window">
        <button>
          <FontAwesomeIcon icon={faWindowRestore} />
        </button>
      </div>
      <div id="copyright">&copy; Ayden Smith 2024</div>
      <div id="clock">
        <Clock />
      </div>
    </footer>
  );
};

export default Footer;

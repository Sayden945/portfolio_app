import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <nav className="conBar">
      <div>
        <h6>Ayden Smith</h6>
      </div>
      <div className="ConList">
        <a href="mailto:ayden_js@yahoo.com" className="conBarItem">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://linkedin.com/in/sayden945" className="conBarItem">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Sayden945" className="conBarItem">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </nav>
  );
};

export default Contact;

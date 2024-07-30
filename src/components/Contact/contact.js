import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Typewriter from "../utils/useTypewriter";
import "./contact.css";

// Contact component to display contact information and links
const Contact = () => {
  return (
    <nav className="conBar">
      <div>
        {/* Typewriter effect for displaying the name */}
        <Typewriter text="Ayden Smith" speed="90" />
      </div>
      <div className="ConList">
        {/* Email link with FontAwesome icon */}
        <a href="mailto:ayden_js@yahoo.com" className="conBarItem">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        {/* LinkedIn profile link with FontAwesome icon */}
        <a href="https://linkedin.com/in/sayden945" className="conBarItem">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* GitHub profile link with FontAwesome icon */}
        <a href="https://github.com/Sayden945" className="conBarItem">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </nav>
  );
};

export default Contact;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-scroll";
import "./contact.css";

const Contact = () => {
  return (
    <nav className="conBar">
      <div className="ConList">
        <Link className="conBarItem">
          <FontAwesomeIcon icon={faEnvelope}/>
        </Link>
        <Link className="conBarItem">
          <FontAwesomeIcon icon={faLinkedin}/>
        </Link>
        <Link className="conBarItem">
          <FontAwesomeIcon icon={faGithub}  />
        </Link>
      </div>
    </nav>
  );
};

export default Contact;

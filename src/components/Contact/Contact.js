import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faGoogle,
  faHackerrank,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <FontAwesomeIcon icon={faDiscord} size="6x" color="white" className="custom-icon" />
        <FontAwesomeIcon icon={faGithub} size="6x" color="white" className="custom-icon" />
        <FontAwesomeIcon icon={faGoogle} size="6x" color="white" className="custom-icon" />
        <FontAwesomeIcon icon={faHackerrank} size="6x" color="white" className="custom-icon" />
        <FontAwesomeIcon icon={faLinkedinIn} size="6x" color="white" className="custom-icon" />
        <FontAwesomeIcon icon={faTwitter} size="6x" color="white" className="custom-icon" />
      </div>
    );
  }
}

export default Contact;

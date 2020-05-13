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
import Nav from "react-bootstrap/Nav";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Nav.Link href="#">
          <FontAwesomeIcon icon={faDiscord} size="6x" color="white" className="custom-icon" />
        </Nav.Link>
        <Nav.Link href="https://github.com/cmok4290" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="6x" color="white" className="custom-icon" />
        </Nav.Link>
        <Nav.Link href="mailto:cmok4290@gmail.com">
          <FontAwesomeIcon icon={faGoogle} size="6x" color="white" className="custom-icon" />
        </Nav.Link>
        <Nav.Link href="https://www.hackerrank.com/profile/headnodic" target="_blank">
          <FontAwesomeIcon icon={faHackerrank} size="6x" color="white" className="custom-icon" />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/cmok4290" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="6x" color="white" className="custom-icon" />
        </Nav.Link>
        <Nav.Link href="https://twitter.com/cmok4290" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="6x" color="white" className="custom-icon" />
        </Nav.Link>
      </div>
    );
  }
}

export default Contact;

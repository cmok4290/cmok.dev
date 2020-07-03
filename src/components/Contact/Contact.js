import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import {
  faDiscord,
  faGithub,
  faGoogle,
  faHackerrank,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import resume from "../../assets/cmok-0-0-7.pdf";
//import "./contact.css";

const data = [
  {
    url: resume,
    icon: faFilePdf,
    target: true,
    tooltip: "resume",
  },
  {
    url: "#",
    icon: faDiscord,
    target: false,
    tooltip: "headnodic#0023",
  },
  {
    url: "https://github.com/cmok4290",
    icon: faGithub,
    target: true,
    tooltip: "github.com/cmok4290",
  },
  {
    url: "mailto:cmok4290@gmail.com",
    icon: faGoogle,
    target: true,
    tooltip: "cmok4290@gmail.com",
  },
  {
    url: "https://www.hackerrank.com/profile/headnodic",
    icon: faHackerrank,
    target: true,
    tooltip: "profile/headnodic",
  },
  {
    url: "https://www.linkedin.com/in/cmok4290",
    icon: faLinkedinIn,
    target: true,
    tooltip: "in/cmok4290",
  },
  {
    url: "https://twitter.com/cmok4290",
    icon: faTwitter,
    target: true,
    tooltip: "twitter.com/cmok4290",
  },
];

function renderTooltip(tooltip, props) {
  console.log(props);
  return (
    <Tooltip id="button-tooltip" {...props}>
      {tooltip}
    </Tooltip>
  );
}

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="content">
          {data.map((contact, i) => {
            return (
              <OverlayTrigger
                key={i}
                placement="top"
                delay={{ show: 250, hide: 250 }}
                overlay={renderTooltip(contact.tooltip)}
              >
                <Nav.Link
                  href={contact.url}
                  target={contact.target ? "_blank" : ""}
                >
                  <FontAwesomeIcon
                    icon={contact.icon}
                    size="6x"
                    color="white"
                    className="custom-icon"
                  />
                </Nav.Link>
              </OverlayTrigger>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contact;

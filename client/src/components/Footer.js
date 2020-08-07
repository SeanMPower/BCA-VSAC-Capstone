import React from "react";
import Logo from "../img/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div id="footer">
      <div id="footer-content">
        <img
          src={Logo}
          className="logo"
          title="VSAC logo white"
          alt="VSAC logo white"
        />
        <div id="contact">
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> (800) 642-3177
          </p>
          <p id="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> info@vsac.org
          </p>
        </div>
        <div id="social-media">
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

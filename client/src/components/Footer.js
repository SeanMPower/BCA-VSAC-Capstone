import React from "react";
import Logo from "../img/logo-white.png";
import Img1 from "../img/1.jpg"
import Img2 from "../img/2.jpg"
import Img3 from '../img/3.jpg'
import Img4 from '../img/4.jpg'
import Img5 from '../img/5.jpg'
import Img6 from '../img/6.jpg'
import Img7 from '../img/7.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

let imgArray = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]

function getRandomInt(max) {     // Selects a random number, used below to select footer image
    return Math.floor(Math.random() * Math.floor(max));
}

const myStyle = {   // Uses random number generator to select footer image from imgArray
    background: `no-repeat center center/cover`,  
    'backgroundImage': `url('${imgArray[getRandomInt(7)]}')`
}

function Footer(props) {
  return (
    <>
    <div id="footer" style={myStyle}>
      <div className='footer-content'>
        <div id='container'>
      <div id="footer-top">
        <img
          src={Logo}
          className="logo"
          title="VSAC logo white"
          alt="VSAC logo white"
        />
        <div id="contact">    {/* Contact icons */}
          <div className="contact" id="phone">
            <FontAwesomeIcon icon={faPhone} className="icon" /><div className='info'>(800) 642-3177</div>
          </div>
          <div className="contact" id="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /><div className='info'>info@vsac.org</div>
          </div>
        </div>
      </div>
      <div id="social-container">
        <div id="social-media">   {/* Social media icons */}
          <a href="https://www.facebook.com/VermontStudentAssistanceCorporation/">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a href="https://twitter.com/vsac">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://www.instagram.com/802vsac/">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/vsac/">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </div>
      </div>
      <div id="footer-bottom">
        <div id='text'>2020 Vermont Student Assistance Corporation</div>
        <div className='space'></div>
        <div id="footer-links"><a href='https://www.vsac.org/contact'>Contact</a><a href='https://www.vsac.org/investors'>Investors</a><a href='https://www.vsac.org/vsf'>Scholarship Donors</a><a href='https://www.vsac.org/privacy-notice'>Privacy Notice</a><a href='https://www.vsac.org/terms-of-use'>Terms of Use</a><a href='https://asp1.humanic.com/pls/vsac/hapss_index.apss'>Jobs at VSAC</a></div>
        </div>
      </div>
      <span id='hr-holder'><hr id='hr'></hr></span>
      <div id='copyright-wrapper'>
      <div id='copyright'>© 2020 All Rights Reserved</div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Footer;

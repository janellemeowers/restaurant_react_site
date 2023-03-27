import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    {/* footer sections */}
    <div className="app__footer-links">
      {/* LEFT: CONTACT */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019</p>
        <p className="p__opensans">212-344-1230</p>
        <p className="p__opensans">212-555-1230</p>
      </div>

      {/* CENTER: LOGO */}
      <div className="app__footer-links_logo">
        <img src={images.garlic} alt="footer_logo" />
        <i>
          {" "}
          <p className="p__opensans" style={{ fontSize: "14px" }}>
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
        </i>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        {/* ICONS */}
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      {/* {RIGHT: HOURS} */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Hours</h1>
        <p className="p__opensans">Tuesday-Friday:</p>
        <p className="p__opensans">10:00 AM - 10:00 PM</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 2:00 AM</p>
      </div>
    </div>

    {/* COPYRIGHT */}
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

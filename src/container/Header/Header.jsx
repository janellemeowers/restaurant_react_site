import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour." />
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        From the earliest times garlic has been used as an article of diet. Now
        experience it like never before.
      </p>
      <a href="#menu" className="custom__button">
        Explore Menu
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

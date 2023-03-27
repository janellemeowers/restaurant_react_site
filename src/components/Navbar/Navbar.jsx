import React, { useState } from "react";
//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  //use state for mobile nav
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    //way to name css block__element
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.garlic} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {/* //each list item is an anchor tag, opensans is font */}
        <li className="p__opensans">
          {" "}
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In /Register
        </a>
        <div>{/* empty div for space */}</div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      {/* hamburger menu for mobile with links, on Click sets to true */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {/* //if toggle is True, show this code */}
        {toggleMenu && (
          // menu close 'x' icon,
          // on click sets to false
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            {/* change class to smallscreen links */}
            <ul className="app__navbar-smallscreen_links">
              {/* //each list item is an anchor tag, opensans is font */}
              <li className="p__opensans">
                {" "}
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

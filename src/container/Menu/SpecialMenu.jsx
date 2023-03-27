import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  //heading
  //flex__center from main app.css file, just centers and declares flex
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* //subheading includes spoon */}
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    {/* menu */}
    <div className="app__specialMenu-menu">
      {/* left side */}
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {/* //access wine data + index */}
          {data.wines.map((wine, index) => (
            // menu item component
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      {/* image */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      {/* right side */}
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {/* //access wine data + index */}
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* button, easier to adjust margin here */}
    <div style={{ marginTop: 5 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;

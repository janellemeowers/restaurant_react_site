import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    {/* //left side */}
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      {/* ADDRESS */}
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">9 W 53rd St, New York, NY 10019</p>
        {/* HOURS */}
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Tues - Fri: 10:00 AM - 10:00 PM</p>
        <p className="p__opensans">Sat - Sun: 10:00 AM - 12:00 AM</p>
      </div>
      {/* VISIT BUTTON */}
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    {/* //right side */}
    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" style={{ width: "75%" }} />
    </div>
  </div>
);

export default FindUs;

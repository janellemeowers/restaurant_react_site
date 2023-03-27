import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

//award component for each, image is in data, award prop
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg section__padding " id="awards">
    <div className="app__wrapper_info awards">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      {/* //loop through laurels data */}
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          // award component, needs unique key prop
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    {/* //g image */}
    {/* <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div> */}
  </div>
);

export default Laurels;

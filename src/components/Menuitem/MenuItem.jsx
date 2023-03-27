import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem" style={{ marginTop: 20 }}>
    <div className="app__menuitem-head">
      {/* title */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      {/* dash price line */}
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    {/* //descriptions */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;

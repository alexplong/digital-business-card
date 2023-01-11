/** @format */

import React from "react";
import photoSelfie from "../images/IMG_1472.jpeg";

function Header() {
  return (
    <div>
      <img alt="Alex Plong" src={photoSelfie} className="header--photo" />
      <h1 className="header--name">Alex Plong</h1>
      <h3 className="header--title">Software Developer</h3>
      <p className="header--link">alexplong.website</p>
    </div>
  );
}

export default Header;

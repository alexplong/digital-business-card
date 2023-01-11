/** @format */

import React from "react";
import instagramIcon from "../images/Instagram Icon.png";
import githubIcon from "../images/GitHub Icon.png";

function Footer() {
  return (
    <div className="footer">
      <span>
        <img alt="Instagram" src={instagramIcon} />
      </span>
      <span>
        <img alt="GitHub" src={githubIcon} />
      </span>
    </div>
  );
}

export default Footer;

/** @format */

import React from "react";
import Button from "../components/Button";
import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.png";

function Buttons() {
  return (
    <div className="btn--container">
      <Button className="btn--email" icon={emailIcon} text="Email" />
      <Button className="btn--linkedin" icon={linkedinIcon} text="LinkedIn" />
    </div>
  );
}

export default Buttons;

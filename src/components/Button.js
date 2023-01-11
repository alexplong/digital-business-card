/** @format */

import React from "react";

function Button(props) {
  return (
    <div>
      <button className={props.className}>
        <img alt="" src={props.icon} />
        <span> {props.text}</span>
      </button>
    </div>
  );
}

export default Button;

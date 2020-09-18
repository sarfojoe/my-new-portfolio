import React from "react";
import "./headingText.css";
import { Link } from "react-router-dom";
import resumePdf from "../../assets/images/Joseph_Resume.pdf";

function HeadingText() {
  return (
    <div>
      <div
        className="uk-tile headingText uk-text-left"
        uk-height-viewport="expand: true"
      >
        <div className="greeting">
          Hello! I'm <span>Joseph Boadi</span>.
        </div>
        <p className="subHeading">Fullstack Web Developer</p>
        <Link to={resumePdf} target="_blank">
          <button className="ctaBtn uk-button uk-button-default uk-margin">
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeadingText;

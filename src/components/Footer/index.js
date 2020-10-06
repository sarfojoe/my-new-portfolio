import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="uk-contianer uk-flex uk-flex-column uk-flex-middle">
        <hr className="uk-divider-small divider" />
        <div>
          <a
            href="https://github.com/sarfojoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span uk-icon="icon: github" className="uk-icon socialLink"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-sarfo-boadi-377735197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              uk-icon="icon: linkedin"
              className="uk-icon socialLink"
            ></span>
          </a>
        </div>
        <Link to="/credits" className="credits uk-text-small uk-margin-top">
          Credits
        </Link>
        <p className="copyright uk-text-small">
          &copy;{new Date().getFullYear()} Joseph Boadi | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

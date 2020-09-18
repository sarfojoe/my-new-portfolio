import React from "react";
import { Link } from "react-router-dom";
import "./navToggle.css";

function NavToggle({ handleOnClick }) {
    return (
        <div id="navToggle" className="uk-position-absolute uk-position-right">
            <ul className="uk-navbar-nav uk-flex uk-flex-right">
                <li><Link className="navSmallLink" to="/" onClick={handleOnClick}>About</Link></li>
                <li><Link className="navSmallLink" to="/portfolio" onClick={handleOnClick}>Portfolio</Link></li>
                <li><Link className="navSmallLink" to="/skills" onClick={handleOnClick}>Skills</Link></li>
                <li><Link className="navSmallLink" to="/contact" onClick={handleOnClick}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default NavToggle;
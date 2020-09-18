import React from "react";
import "./skillCard.css";

function SkillCard(props) {
    return (
        <div>
            <div className="skill-card uk-card uk-card-body">
                <img className="skill-icon" src={props.icon} alt={props.title + " icon"} />
                <p className="skill-title">{props.title}</p>
            </div>
        </div>
    );
}

export default SkillCard;
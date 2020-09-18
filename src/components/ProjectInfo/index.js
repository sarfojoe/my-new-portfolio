import React from "react";
import "./projectInfo.css";

export default function ProjectInfo({ title, description, services }) {
    return (
        <div className="project-info uk-flex uk-flex-column uk-flex-around">
            <h2 className="uk-text-center">{title}</h2>
            <div className="uk-flex uk-flex-column uk-width-100">
                <div className="uk-flex uk-margin-bottom uk-width-100">
                    <h3>ABOUT THE PROJECT</h3>
                    <p>{description}</p>
                </div>
                <div className="uk-flex uk-margin-bottom uk-width-100">
                    <h3>SERVICES</h3>
                    <p>{services}</p>
                </div>
            </div>
        </div>
    )
}

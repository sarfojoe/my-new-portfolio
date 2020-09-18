import React from "react";
import "./portfolioCard.css";

function PortfolioCard({ title, description, imageUrl, githubUrl, deployedUrl }) {
    return (
        <div className="portfolioCard uk-card uk-card-default">
            <div className="portfolio-card-img-container uk-card-media-top">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title uk-text-truncate">{title}</h3>
                <p>{description}</p>
                <a className="repoLink" href={githubUrl}
                    target="_blank" rel="noopener noreferrer">GITHUB</a> {deployedUrl ? (<a className="demoLink"
                        href={deployedUrl} target="_blank" rel="noopener noreferrer">DEMO</a>) : ""}
            </div>
        </div>
    );
}

export default PortfolioCard;
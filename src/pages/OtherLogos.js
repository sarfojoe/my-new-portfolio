import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherLogosSplash from "../assets/images/otherLogos-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";

export default function OtherLogos() {
    return (
        <div className="container">
            <Splash imgUrl={otherLogosSplash} />
            <ProjectInfo
                title="Other Logos"
                description="The following are logos I have designed in the past 4 years. I
                    started each by pencil and paper then vectorized them in Illustrator."
                services="Logo Designs"
            />
        </div>
    )
}

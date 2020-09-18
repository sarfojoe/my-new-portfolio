import React from "react";
import "./about.css";

function About() {
  return (
    <div className="aboutWrapper uk-width-expand">
      <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0, 0 0, 100 100, 0" />
      </svg>
      <div className="uk-child-width-1-2@m uk-flex uk-flex-column uk-flex-middle">
        <h1 className="uk-text-center">About Me</h1>
        <p className="aboutMeText uk-text-justify uk-padding">
          <h4>
            I have always sought out opportunities and challenges that are
            meaningful to me. Although my profession path has taken many twists
            and turns - from Teaching to Sales Manager and other miniature jobs
            - I've never stopped engaging my passion to help others and solve
            problems.
            <br />
            My current studies at the Helsinki Business College has given me
            practical and in-depth knowledge in JavaScript, ReactJs, NodeJs,
            HTML, CSS, MongoDB, Express Redux, UI-Design and prototype.
            Enrollment at the Helsinki Business College has deepened my passion
            for coding while bringing design to life.
            <br />
            As a web developer, I enjoy using my obsessive attention to detail,
            my unequivocal love for making things, and my mission-driven work
            ethic to literally change the world. That is why I am excited to
            make a big impact at a high growth company.
          </h4>
        </p>
      </div>
    </div>
  );
}

export default About;

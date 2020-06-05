import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNpm } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h3>
        Above ember nights at still leave the explore door lamplight. I the god
        that croaking oer ease much and tis. Shall the fowl out only nevermore
        wind i. Door here thy air whose whom lenore a. Spoke nothing flutter or
        not of have soul to raven. My the bird made. Above ember nights at still
        leave the explore door lamplight. I the god that croaking oer ease much
        and tis. Shall the fowl out only nevermore wind i. Door here thy air
        whose whom lenore a. Some other technologies I've used in the past but
        can't exactly give a TED Talk on are:
      </h3>
      <ul>
        <li>Bootstrap</li>
        <li>JQuery</li>
        <li>SQL</li>
        <li>Python</li>
      </ul>
      <div className="icons-div">
        <div>
          <FaJs className="tech-icon" id="jsIcon" />
          <FaReact className="tech-icon" />
          <FaNpm className="tech-icon" />
        </div>
        <div>
          <FaHtml5 className="tech-icon" />
          <FaCss3Alt className="tech-icon" />
        </div>
      </div>
      <div id="resume-container">
        <a href="">
          <button id="resume-btn">Resumé</button>
        </a>
      </div>
    </div>
  );
}

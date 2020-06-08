import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNpm } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h3>
        What up! I'm Kevin and I'm a nascent web developer living in Brooklyn
        NY. For the past year or so I've hit learning Front End Development on
        my own pretty hard. I've accomplished tasks initially thought to be
        impossible, and I'm looking forward to doing it again in the future, but
        with a team at my side. Learning has always been a passion of mine, but
        at some point <span id="learn">the learning must become doing</span>{" "}
        which brings us this portfolio website. <br></br>Please do have a look
        around, try not to judge too harshly, and if you feel inclined, there's
        plenty of opportunities in the form of links to reach out!
      </h3>
      <ul>
        <h1>Core Technologies</h1>
        <li>Javascript</li>
        <li>React (Hooks & Class Components)</li>
        <li>HTML</li>
        <li>CSS (Responsive Design, Flex-box)</li>
      </ul>
      <ul>
        <h1>Addtional Experience With...</h1>
        <li>Bootstrap</li>
        <li>JQuery</li>
        <li>SQL</li>
        <li>Python</li>
        <li>C</li>
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
    </div>
  );
}

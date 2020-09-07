import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNpm } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h3>
        What's up! I'm Kevin and I'm a web developer living in Brooklyn NY. For
        the past year or so I've hit learning web dev on my own pretty hard.
        I've accomplished tasks initially thought to be impossible, and I'm
        looking forward to doing it again in the future. Learning has always
        been a passion of mine, but at some point{" "}
        <span id="learn">the learning must become doing</span> which brings us
        this portfolio website. <br></br>Please do have a look around, and if
        you feel inclined, there's plenty of opportunities to reach out!
      </h3>
      <ul>
        <li>
          <h1>Core Technologies</h1>
        </li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js + Express</li>
        <li>MongoDB</li>
        <li>HTML + CSS (SCSS, Responsive, Flex-box)</li>
      </ul>
      <ul>
        <li>
          <h1>Additional Experience With...</h1>
        </li>
        <li>Bootstrap</li>
        <li>JQuery</li>
        <li>Redux</li>
        <li>Git/Github</li>
        <li>JEST</li>
        <li>Webscraping (node fetch, puppeteer)</li>
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

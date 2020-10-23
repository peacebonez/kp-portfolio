import React, { useEffect } from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNpm } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    const icons = document.querySelectorAll(".tech-icon");

    const fadeIn = (delay) => {
      icons.forEach((icon) => {
        const iconTop = icon.getBoundingClientRect().top;
        const iconBottom = icon.getBoundingClientRect().bottom;

        if (iconTop < window.innerHeight && iconBottom > 0) {
          icon.style.animation = `fadeIn 2.5s ${delay}s both`;
          delay = delay + 0.25;
        } else {
          icon.style.opacity = 0;
          icon.style.animation = "";
        }
      });
    };

    fadeIn(0.1);
    document.addEventListener("scroll", () => {
      fadeIn(0.1);
    });
    window.addEventListener("resize", () => {
      fadeIn(0.1);
    });
  });

  return (
    <section className="about-container">
      <div id="magic-circle"></div>
      <div id="magic-square"></div>
      <div className="about-wrapper">
        <div className="about-box" id="about-box-1">
          <h2>What's Up!</h2>
        </div>
        <div className="about-box" id="about-box-2">
          <h2>I'm Kevin and I'm a web developer living in Brooklyn, NY.</h2>
        </div>
        <div className="about-box" id="about-box-3">
          <h2>Let's work together!</h2>
        </div>
      </div>
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
        <li>Google Cloud</li>
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
    </section>
  );
}

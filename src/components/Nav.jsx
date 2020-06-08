import React, { useState, useEffect, useRef } from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Nav() {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav-container").style.top = 0;
      } else {
        document.querySelector(".nav-container").style.top = "-245px";
      }
      prevScrollpos = currentScrollPos;
    };
  });
  return (
    <div className="nav-container">
      <div>
        <h1>Kevin M. Pariso</h1>
        <h2>Web Developer</h2>
      </div>
      <ul className="nav-list">
        <a
          href="https://github.com/peacebonez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li id="git-square">
            <FaGithubSquare />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-pariso-584b709b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li id="linked-in">
            <FaLinkedin />
          </li>
        </a>
        <a href="mailto:kmpariso12@gmail.com">
          <li id="envelope">
            <FaEnvelope />
          </li>
        </a>
      </ul>
    </div>
  );
}

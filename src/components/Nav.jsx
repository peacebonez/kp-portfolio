import React, { useState, useEffect, useRef } from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="nav-container">
      <div>
        <h1>Kevin M. Pariso</h1>
        <h2>Web Developer</h2>
      </div>
      <ul className="nav-list">
        <a>
          <li id="git-square">
            <FaGithubSquare />
          </li>
        </a>
        <a>
          <li id="linked-in">
            <FaLinkedin />
          </li>
        </a>
        <a>
          <li id="envelope">
            <FaEnvelope />
          </li>
        </a>
      </ul>
    </div>
  );
}

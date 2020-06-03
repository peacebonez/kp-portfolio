import React from "react";
import { FaGitSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="nav-container">
      <h1>Kevin M. Pariso</h1>
      <h2>Web Developer</h2>
      <ul className="nav-list">
        <a>
          <li id="git-square">
            <FaGitSquare />
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

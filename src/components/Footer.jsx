import React, { useState } from "react";
import { FaArrowUp, FaFile } from "react-icons/fa";

export default function Footer() {
  const [isHover, setIsHover] = useState(false);
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <>
      <hr id="footer-hr"></hr>
      <div className="footer-block"></div>
      <div className="footer">
        <div
          className="footer-img"
          onClick={toTop}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaArrowUp id="fa-up" style={{ opacity: isHover ? 1 : 0 }} />
          <img
            src="https://i.imgur.com/QYhFtG9.jpg?1"
            alt="Author standing on a rooftop in Singapore"
            style={{ opacity: isHover ? 0.5 : 1 }}
          ></img>
        </div>
        <div className="resume-box">
          <a
            href="https://docs.google.com/document/d/1r_nwNXq3zfGhQz_Kwu3cScxJA2F7XdwDovS49DHvKN8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="resume">
              <FaFile />
              Resumé
            </button>
          </a>
        </div>
        <div className="footer-text">
          <ul>
            <li>
              <h4>Kevin Pariso</h4>
            </li>
            <li>
              <p>kmpariso12@gmail.com</p>
            </li>
            <li>
              <p>Brooklyn, NY</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

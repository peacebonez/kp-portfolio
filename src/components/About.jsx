import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNpm } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <h3>
        Had fabled pile and fulness name friend and. Was dares full thou known
        the hill nor awake, times where native pleasure soils soon flatterers
        oft departed yet. He longdeserted loved ever harolds ye bacchanals many,
      </h3>
      <div className="icons-div">
        <div>
          <FaJs className="tech-icon" />
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

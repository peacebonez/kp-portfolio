import React from "react";
import ProjectBox from "./ProjectBox";

const projects = [
  {
    name: "E-Commerce",
    link: "https://black-market-market.netlify.app/",
  },
  {
    name: "Vaporwave Memory Game",
    link: "https://memory-card-game-with-hooks.netlify.app/",
  },
  {
    name: "Recipe Finder",
    link: "https://food-finder-app.netlify.app/",
  },
  {
    name: "Drum Machine",
    link: "https://fcc-drum-machine-react.netlify.app/",
  },
  {
    name: "Virtual Library",
    link: "https://virtual-library.netlify.app/",
  },
  {
    name: "Kpop or Final Fantasy?",
    link: "https://kpopvsfinalfantasy.netlify.app/",
  },
  {
    name: "Calculator",
    link: "https://fcc-calculator-react.netlify.app/",
  },
  {
    name: "Conway's Game of Life",
    link: "https://game-of-life-with-hooks.netlify.app/",
  },
];
let id = 0;
export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h3>Projects</h3>
      </div>
      <div className="projects">
        {projects.map(({ name, link }) => {
          id++;
          return <ProjectBox id={id} name={name} link={link} />;
        })}
      </div>
    </div>
  );
}

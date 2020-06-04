import React from "react";
import ProjectBox from "./ProjectBox";
import { FaChevronDown } from "react-icons/fa";

const projects = [
  {
    name: "E-Commerce",
    link: "https://black-market-market.netlify.app/",
    gitLink: "https://github.com/peacebonez/eccommerce-black-market",
  },
  {
    name: "Vaporwave Memory Game",
    link: "https://memory-card-game-with-hooks.netlify.app/",
    gitLink: "https://github.com/peacebonez/memory-app-with-hooks",
  },
  {
    name: "Recipe Finder",
    link: "https://food-finder-app.netlify.app/",
    github: "https://github.com/peacebonez/recipe-app",
  },
  {
    name: "Drum Machine",
    link: "https://fcc-drum-machine-react.netlify.app/",
    gitLink: "https://github.com/peacebonez/FCC-drum-machine",
  },
  {
    name: "Virtual Library",
    link: "https://virtual-library.netlify.app/",
    gitLink: "https://github.com/peacebonez/library-app",
  },
  {
    name: "Kpop or Final Fantasy?",
    link: "https://kpopvsfinalfantasy.netlify.app/",
    gitLink: "https://github.com/peacebonez/-Kpop-Vs-Final-Fantasy-Game",
  },
];
let id = 0;
export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h3>Projects</h3>
        <a href="#project-box-1">
          <button id="chevron">
            <FaChevronDown />
          </button>
        </a>
      </div>
      <div className="projects">
        {projects.map(({ name, link, gitLink }) => {
          id++;
          return (
            <ProjectBox id={id} name={name} link={link} gitLink={gitLink} />
          );
        })}
      </div>
    </div>
  );
}

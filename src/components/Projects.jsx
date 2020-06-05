import React from "react";
import ProjectBox from "./ProjectBox";
import { FaChevronDown } from "react-icons/fa";

const projects = [
  {
    name: "E-Commerce",
    link: "https://black-market-market.netlify.app/",
    gitLink: "https://github.com/peacebonez/eccommerce-black-market",
    largeImg: "https://i.imgur.com/FyGCClS.png",
    smallImg: "https://i.imgur.com/odp6Ga8.jpg",
  },
  {
    name: "Vaporwave Memory Game",
    link: "https://memory-card-game-with-hooks.netlify.app/",
    gitLink: "https://github.com/peacebonez/memory-app-with-hooks",
    largeImg: "https://i.imgur.com/FlWcltw.png",
    smallImg: "https://i.imgur.com/DQ72IyF.jpg",
  },
  {
    name: "Recipe Finder",
    link: "https://food-finder-app.netlify.app/",
    github: "https://github.com/peacebonez/recipe-app",
    largeImg: "https://i.imgur.com/BbZJX4h.png",
    smallImg: "https://i.imgur.com/6YQr8ge.jpg",
  },
  {
    name: "Drum Machine",
    link: "https://fcc-drum-machine-react.netlify.app/",
    gitLink: "https://github.com/peacebonez/FCC-drum-machine",
    largeImg: "https://i.imgur.com/UfpjhHg.png",
    smallImg: "https://i.imgur.com/EtYd8jx.jpg",
  },
  {
    name: "Virtual Library",
    link: "https://virtual-library.netlify.app/",
    gitLink: "https://github.com/peacebonez/library-app",
    largeImg: "https://i.imgur.com/btqDo6Q.png",
    smallImg: "https://i.imgur.com/H2hW2l8.jpg",
  },
  {
    name: "Kpop or Final Fantasy?",
    link: "https://kpopvsfinalfantasy.netlify.app/",
    gitLink: "https://github.com/peacebonez/-Kpop-Vs-Final-Fantasy-Game",
    largeImg: "https://i.imgur.com/WDPfNiR.png",
    smallImg: "https://i.imgur.com/eSai5ru.jpg",
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
        {projects.map(({ name, link, gitLink, smallImg, largeImg }) => {
          id++;
          return (
            <ProjectBox
              key={id}
              id={id}
              name={name}
              link={link}
              gitLink={gitLink}
              smallImg={smallImg}
              largeImg={largeImg}
            />
          );
        })}
      </div>
    </div>
  );
}

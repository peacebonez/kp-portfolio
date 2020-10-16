import React from "react";
import ProjectBox from "./ProjectBox";
import { FaChevronDown } from "react-icons/fa";

const projects = [
  {
    name: "Facetune Fails Blog",
    link: "https://radiant-plateau-54256.herokuapp.com/",
    gitLink: "https://github.com/peacebonez/facetune-fails",
    largeImg: "https://i.imgur.com/ZeLmkPD.gif",
    smallImg: "https://i.imgur.com/ZeLmkPD.gif",
  },
  {
    name: "npm react-blend-buttons",
    link: "https://loving-edison-6a8a92.netlify.app/",
    gitLink: "https://www.npmjs.com/package/react-blend-buttons",
    largeImg: "https://media.giphy.com/media/sdb95iGCQ4Kk6nHdDl/giphy.gif",
    smallImg: "https://media.giphy.com/media/sdb95iGCQ4Kk6nHdDl/giphy.gif",
  },
  {
    name: "Recipe Finder",
    link: "https://food-finder-app.netlify.app/",
    gitLink: "https://github.com/peacebonez/recipe-app",
    largeImg: "https://i.imgur.com/BbZJX4h.png",
    smallImg: "https://i.imgur.com/6YQr8ge.jpg",
  },
  {
    name: "e-Enroll Web Scraper",
    link: "https://dry-gorge-55629.herokuapp.com/",
    gitLink: "https://github.com/peacebonez/e-course-scraper",
    largeImg: "https://media.giphy.com/media/FaAKLOXTsvYAADkiqc/giphy.gif",
    smallImg: "https://media.giphy.com/media/FaAKLOXTsvYAADkiqc/giphy.gif",
  },
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
  // {
  //   name: "Self Marketing Twitter Bot",
  //   link: "https://twitter.com/kpizo3",
  //   gitLink: "https://github.com/peacebonez/twitter-bot-v2",
  //   largeImg: "https://media.giphy.com/media/fSFbBPmr4HPRwW0VMo/giphy.gif",
  //   smallImg: "https://media.giphy.com/media/fSFbBPmr4HPRwW0VMo/giphy.gif",
  // },
  // {
  //   name: "Drum Machine",
  //   link: "https://fcc-drum-machine-react.netlify.app/",
  //   gitLink: "https://github.com/peacebonez/FCC-drum-machine",
  //   largeImg: "https://i.imgur.com/UfpjhHg.png",
  //   smallImg: "https://i.imgur.com/EtYd8jx.jpg",
  // },
  // {
  //   name: "Virtual Library",
  //   link: "https://virtual-library.netlify.app/",
  //   gitLink: "https://github.com/peacebonez/library-app",
  //   largeImg: "https://i.imgur.com/btqDo6Q.png",
  //   smallImg: "https://i.imgur.com/H2hW2l8.jpg",
  // },
];
let id = 0;
export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h3>Recent Projects</h3>
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

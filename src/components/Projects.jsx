import React from "react";
import ProjectBox from "./ProjectBox";
import { FaChevronDown } from "react-icons/fa";

const projects = [
  {
    name: "World Chat",
    link: "https://world-chat-mern.herokuapp.com/",
    gitLink: "https://github.com/peacebonez/world-chat",
    largeImg: "https://i.imgur.com/1NwifmG.png",
    smallImg: "https://i.imgur.com/1NwifmG.png",
  },
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
    name: "Sip Coffee House",
    link: "https://competent-colden-44dbfd.netlify.app/",
    gitLink: "https://github.com/peacebonez/sip-website",
    largeImg: "https://i.imgur.com/BdbjkZY.gif",
    smallImg: "https://i.imgur.com/BdbjkZY.gif",
  },
  {
    name: "e-Enroll Web Scraper",
    link: "https://dry-gorge-55629.herokuapp.com/",
    gitLink: "https://github.com/peacebonez/e-course-scraper",
    largeImg: "https://media.giphy.com/media/FaAKLOXTsvYAADkiqc/giphy.gif",
    smallImg: "https://media.giphy.com/media/FaAKLOXTsvYAADkiqc/giphy.gif",
  },
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

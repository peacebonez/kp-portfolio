import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectBox({ name, link, gitLink, id }) {
  const [isShown, setIsShown] = useState(false);
  const showTitle = () => {
    setIsShown(true);
  };
  const hideTitle = () => {
    setIsShown(false);
  };
  console.log(gitLink);
  return (
    <a
      href={link}
      target="_blank"
      onMouseOver={showTitle}
      onMouseOut={hideTitle}
    >
      <div
        id={`project-box-${id}`}
        className={isShown ? "project-box box-hover" : "project-box"}
      >
        <div className={isShown ? "title-shown" : "title-hidden"}>
          <p>{name}</p>
          <a
            href={gitLink}
            target="_blank"
            className="git-link"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </a>
  );
}

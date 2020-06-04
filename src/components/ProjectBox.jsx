import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectBox({
  width,
  name,
  link,
  gitLink,
  smallImg,
  largeImg,
  id,
}) {
  const [isShown, setIsShown] = useState(false);
  const showTitle = () => {
    setIsShown(true);
  };
  const hideTitle = () => {
    setIsShown(false);
  };
  // < 425 use mobile images
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
        style={{
          backgroundImage: `url(${width < 400 ? smallImg : largeImg})`,
          backgroundPosition: name === "Drum Machine" ? "center" : "top",
        }}
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

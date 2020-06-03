import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectBox({ name, link, id }) {
  const [isShown, setIsShown] = useState(false);
  const showTitle = () => {
    setIsShown(true);
  };
  const hideTitle = () => {
    setIsShown(false);
  };
  console.log("isShown:", isShown);
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
          <a href={link}>
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </a>
  );
}

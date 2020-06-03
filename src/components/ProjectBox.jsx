import React, { useState } from "react";

export default function ProjectBox({ name, link, id }) {
  const [isShown, setIsShown] = useState(false);
  const showTitle = () => {
    setIsShown((s) => !s);
  };
  console.log("isShown:", isShown);
  return (
    <a
      href={link}
      target="_blank"
      onMouseOver={showTitle}
      onMouseOut={showTitle}
    >
      <div id={`project-box-${id}`} className="project-box">
        <div className={isShown ? "title-hidden" : "title-shown"}>
          <p>{name}</p>
        </div>
      </div>
    </a>
  );
}

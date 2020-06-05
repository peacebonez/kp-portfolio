import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectBox({
  name,
  link,
  gitLink,
  smallImg,
  largeImg,
  id,
}) {
  const [isShown, setIsShown] = useState(false);
  const [cardMobile, setCardMobile] = useState(false);

  const showTitle = () => {
    setIsShown(true);
  };
  const hideTitle = () => {
    setIsShown(false);
  };

  React.useEffect(() => {
    let projectCard = document.getElementById(`project-box-${id}`);
    // console.log(projectCard);
    console.log(projectCard.clientWidth);
    projectCard.addEventListener("resize", () => {
      if (projectCard.clientWidth < 125) {
        setCardMobile(true);
      } else {
        setCardMobile(false);
      }
    });

    console.log("Mobile Mode?", cardMobile);
  }, [setCardMobile, cardMobile, id]);

  return (
    <div>
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
            backgroundImage: `url(${cardMobile ? smallImg : largeImg})`,
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
    </div>
  );
}

import React, { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Email from "./components/Email";
import "./App.css";

import gradient from "./gradient";

function Portfolio() {
  useEffect(() => {
    //when we scroll page, advance progress bar

    const progressBar = document.querySelector("#progress-bar");
    const circle = document.querySelector("#magic-circle");

    document.addEventListener("scroll", function () {
      const pixels = window.pageYOffset;

      const pageHeight = Math.round(
        document.body.getBoundingClientRect().height
      );
      const scrollDistance = pageHeight - window.innerHeight;

      const percentage = pixels / scrollDistance;

      progressBar.style.width = `${percentage * 100}%`;

      if (percentage * 100 > 60) circle.style.opacity = 0;
      else circle.style.opacity = 1;
    });
  });

  return (
    <div className="App">
      <div id="progress-bar" />
      <Nav />
      <About />
      <Projects />
      <Email />
      <Footer />
    </div>
  );
}

export default Portfolio;

gradient();

import React, {useEffect} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Email from "./components/Email";
import "./App.css";

import gradient from "./gradient";

function Portfolio() {
  useEffect(() => 
  //when we scroll page, advance progress bar
  document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset;
    const progressBar = document.querySelector("#progress-bar");
    const pageHeight = Math.round(document.body.getBoundingClientRect().height)
    console.log("pageHeight", pageHeight)

    const scrollDistance = (pageHeight - window.innerHeight)

    const percentage = pixels / scrollDistance;

    progressBar.style.width = `${percentage * 100}%`;
  }))
  return (
    <div className="App">
      <div id="progress-bar"/>
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

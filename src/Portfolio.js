import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function Portfolio() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let listener = window.addEventListener("resize", function () {
      setWidth(window.innerWidth);

      return () => window.removeEventListener(listener);
    });
  });

  return (
    <div className="App">
      <Nav />
      <About />
      <Projects width={width} />
      <Footer />
    </div>
  );
}

export default Portfolio;

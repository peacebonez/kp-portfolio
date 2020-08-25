import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Email from "./components/Email";
import "./App.css";

import gradient from "./gradient";

function Portfolio() {
  return (
    <div className="App">
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

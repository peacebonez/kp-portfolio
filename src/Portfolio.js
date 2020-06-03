import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function Portfolio() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Portfolio;

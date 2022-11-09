import React from "react";
import About from "./about/about";
import Awards from "./awards/awards";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import Intro from "./intro/intro";
import Projects from "./projects/projects";

function Home(): React.ReactElement {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Awards />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;

import React from "react";
import About from "./about/about";
import Awards from "./awards/awards";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import CustomFooter from "./footer/footer";
import Intro from "./intro/intro";
import PersonalProjects from "./personal_projects/projects";
import WorkProjects from "./work_projects/workproject";
import Navbar from "../navbar/navbar";

function Home(): React.ReactElement {
  return (
    <>
      <Intro />
      <Navbar />
      <About />
      <Experience />
      <div id="projects">
        <WorkProjects />
        <PersonalProjects />
      </div>

      <Awards />
      <Contact />
      <CustomFooter />
    </>
  );
}

export default Home;

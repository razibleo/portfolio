import React from "react";
import About from "./about/about";
import Awards from "./awards/awards";
import Contact from "./contact/contact";
import Experience from "./experience/experience";
import CustomFooter from "./footer/footer";
import Intro from "./intro/intro";
import PersonalProjects from "./personal_projects/projects";
import WorkProjects from "./work_projects/workproject";

function Home(): React.ReactElement {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <WorkProjects />
      <PersonalProjects />
      <Awards />
      <Contact />
      <CustomFooter />
    </>
  );
}

export default Home;

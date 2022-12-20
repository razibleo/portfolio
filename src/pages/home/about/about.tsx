import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";

import Typewriter from "typewriter-effect";
import TagCloud from "./components/tagcloud";

const About = () => {
  return (
    <div id="about">
      <div className="about-wrapper">
        <SectionHeader title={"About"} />
        <Container fluid className="about-content">
          <Row>
            <Col md={6}>
              <div className="about-text">
                <h2>Who am I?</h2>
                <p>Hi, i'm Razib 😄</p>
                <p>
                  ⚡️ A passionate 👨‍💻Full Stack Web & 📱Mobile developer
                  employing the best practices across numerous tech stacks.
                </p>
                <p>
                  ⚡️ You can find me working with React, Flutter, Express,
                  Laravel among many others.
                </p>
                <p>⚡️ Flight sim geek.✈️</p>

                <div className="i-love-section">
                  <p style={{ paddingRight: "4px" }}>⚡️ I love</p>
                  <p>
                    <Typewriter
                      options={{
                        strings: [
                          "learning new technologies💡",
                          "experimenting with different design patterns",
                          "solving complex problems",
                          "fixing hard-to-fix bugs 🛠",
                          "collaborating with others 🤝",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                </div>
              </div>

              <div className="about-summary">
                <p>
                  At the start of 2017, I only intended to learn coding just to
                  impress my friends. But, over time, this obsession turned into
                  a hobby and is now the <a href="">career</a> path that I have
                  chosen. During this period, I had constantly been exposed to
                  new technologies, leading me to work on several{" "}
                  <a href="">projects</a> and collaborate with some great
                  people.
                  {/*                 
                At durin Since 2 - I've spent my time seeking and learning
                new technologies and forms of digital expression. This has led
                to me working on some amazing world-class{" "} */}
                  {/* <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link>
              , worked at some{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                amazing places
              </Link>
              , and worked with some great people. */}
                </p>
              </div>

              <div className="location-wrapper">
                <LocationIcon />
                <p>Abu Dhabi, UAE</p>
              </div>
            </Col>
            <Col md={6}>
              <h2 className="skills-header">Skills</h2>
              <div style={{ width: "110%" }}>
                <TagCloud />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

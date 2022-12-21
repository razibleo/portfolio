import "./intro.css";
import React, { useCallback, useEffect, useRef } from "react";
import profileImg from "../../../assets/profile.jpeg";
import Typewriter from "typewriter-effect";
import Particles from "react-particles";
import type {
  Container,
  Engine,
  RecursivePartial,
  IOptions,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import linkedin from "../../../assets/social/linkedin.png";
import github from "../../../assets/social/github.png";
import ArrowDropDown from "@mui/icons-material/ArrowDropDownCircleRounded";
import { Link } from "react-scroll";
import { adujustedOffset, navBarHeight } from "../../navbar/navbar";

const Intro: React.ElementType = () => {
  const x: RecursivePartial<IOptions> = {
    particles: {
      number: { value: 20 },
      color: { value: ["#0be779", "#008a3e", "#a3ffce"] },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.3,
          sync: true,
        },
      },
      size: {
        value: 50,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 450,
        color: "#ffffff",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        bounce: true,
      },
    },
    interactivity: {
      detect_on: "canvas",
      // activate
      events: {
        onhover: {
          enable: true,
          mode: ["bubble"],
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 17,
          duration: 1,
          opacity: 0.8,
          speed: 2,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
  };
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log("container", container);
    },
    []
  );

  return (
    <div className="intro">
      <Particles
        params={x}
        // style={{ position: "absolute" }}
        init={particlesInit}
        loaded={particlesLoaded}
        // canvasClassName="particles"
        className="particles"
      />
      <article className="intro-main">
        <img className="profileimg" src={profileImg} />

        <h1 className="greeting-text">
          Hi, I'm <span className="name">Razib Sarker</span>.{" "}
          <span className="wave-emoji" role="img" aria-label="waving hand">
            👋
          </span>
        </h1>

        <h1 className="greeting-text">
          <Typewriter
            options={{
              strings: [
                "It's nice to meet you.",
                "I'm a Full-Stack Engineer.",
                "I like to design web & mobile apps.",
                "I love learning new tech.",
                "I love meeting new people.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              cursor: "<",
              delay: 100,
            }}
          />
        </h1>
      </article>

      <div className="links">
        <a
          href="https://www.linkedin.com/in/razibsarkerleo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Linkedin Logo" />
        </a>

        <a
          href="https://github.com/razibleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github Logo" />
        </a>
      </div>

      <Link to="about" smooth={true} duration={500} offset={adujustedOffset}>
        <div className="scroll-down">
          <ArrowDropDown style={{ fontSize: "30px", cursor: "pointer" }} />
        </div>
      </Link>
    </div>
  );
};

export default Intro;

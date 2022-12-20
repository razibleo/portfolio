import React, { FC, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-scroll";
// import MobileNav from '../mobileNav/MobileNav'

const Navbar: FC = () => {
  const [mobilenavVisible, setMobilenavVisible] = useState(false);
  const [hamburgerClass, setHamburgerClass] = useState("");
  const toggleMobilenavVisible = () => {
    setMobilenavVisible(!mobilenavVisible);
    if (hamburgerClass === "") {
      setHamburgerClass("open");
    } else {
      setHamburgerClass("");
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlinks}>
        <div className={styles["navlink-wrapper"]}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
        </div>
        <div className={styles["navlink-wrapper"]}>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            EXPERIENCE
          </Link>
        </div>
        <div className={styles["navlink-wrapper"]}>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            PROJECTS
          </Link>
        </div>

        <div className={styles["navlink-wrapper"]}>
          <Link to="awards" spy={true} smooth={true} duration={500}>
            AWARDS
          </Link>
        </div>
        <div className={styles["navlink-wrapper"]}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className={styles.hamburger}>
        <div
          id="hamburger-icon"
          className={hamburgerClass}
          onClick={toggleMobilenavVisible}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <MobileNav
        toggleMobilenavVisible={toggleMobilenavVisible}
        mobilenavVisible={mobilenavVisible}
      /> */}
    </nav>
  );
};

export default Navbar;

import React, { FC, useState } from "react";
import styles from "./navbar.module.scss";
import { Link, scrollSpy } from "react-scroll";
import useAtBottom from "../../shared/hooks/useAtbottom";
import AnimatedMenuButton from "./components/animated-menu-button/animated-menu-button";
// import MobileNav from '../mobileNav/MobileNav'
import { useEffect } from "react";
import MobileNavBar from "./components/mobilenavbar/mobilenavbar";
export const navBarHeight = 60;
export const adujustedOffset = -navBarHeight;

// enum Navlink {
//   about = "about",
//   experience = "experience",
//   projects = "projects",
//   awards = "awards",
//   contact = "contact",
//   unknown = "unknown,",
// }
// const NavlinkFromString = (value: String): Navlink =>
//   Object.values(Navlink).find(
//     (item) => item.toLocaleLowerCase() === value.toLowerCase()
//   ) ?? Navlink.unknown;

const Navbar: FC = () => {
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

  const isAtBottom = useAtBottom({ offset: 10 });

  const baseNavStyle = styles.navitem;
  const selectedBaseStyle = styles["navitem-selected"];

  // useEffect(() => {
  //   scrollSpy((e: any) => {
  //     console.log("state handler", e);
  //   });
  // }, []);

  // console.log("scrollspy", scrollSpy.scrollSpyContainers);

  return (
    <div className={styles.wrapper}>
      <div
        style={
          { "--navbar-height": `${navBarHeight}px` } as React.CSSProperties
        }
        className={styles.navbar}
      >
        <div className={styles.navlinks}>
          <div className={styles["navlink-wrapper"]}>
            <Link
              to="about"
              spy={true}
              // smooth={true}
              duration={500}
              offset={adujustedOffset}
              className={baseNavStyle}
              activeClass={selectedBaseStyle}
            >
              ABOUT
            </Link>
          </div>
          <div className={styles["navlink-wrapper"]}>
            <Link
              to="experience"
              spy={true}
              // smooth={true}
              duration={500}
              offset={adujustedOffset}
              className={baseNavStyle}
              activeClass={selectedBaseStyle}
            >
              EXPERIENCE
            </Link>
          </div>
          <div className={styles["navlink-wrapper"]}>
            <Link
              to="projects"
              spy={true}
              // smooth={true}
              duration={500}
              offset={adujustedOffset}
              className={baseNavStyle}
              activeClass={selectedBaseStyle}
            >
              PROJECTS
            </Link>
          </div>

          <div className={styles["navlink-wrapper"]}>
            <Link
              to="awards"
              spy={true}
              // smooth={true}
              duration={500}
              offset={adujustedOffset}
              className={baseNavStyle}
              activeClass={isAtBottom ? baseNavStyle : selectedBaseStyle}
            >
              AWARDS
            </Link>
          </div>
          <div className={styles["navlink-wrapper"]}>
            <Link
              to="contact"
              spy={true}
              // smooth={true}
              duration={500}
              offset={adujustedOffset}
              className={isAtBottom ? selectedBaseStyle : baseNavStyle}
              activeClass={selectedBaseStyle}
            >
              CONTACT
            </Link>
          </div>
        </div>
        <span className={styles["menu-icon-wrapper"]}>
          <AnimatedMenuButton
            isOpened={isMenuOpened}
            onPressed={() => setMenuOpened((val) => !val)}
          />
        </span>
      </div>

      <MobileNavBar
        isOpened={isMenuOpened}
        onPressedLink={() => {
          setMenuOpened(false);
        }}
      />

      {/* <div className={styles.hamburger}>
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
      </div> */}
      {/* <MobileNav
        toggleMobilenavVisible={toggleMobilenavVisible}
        mobilenavVisible={mobilenavVisible}
      /> */}
    </div>
  );
};

export default Navbar;

import React, { FC, useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-scroll";
import useAtBottom from "../../shared/hooks/useAtbottom";
import AnimatedMenuButton from "./components/animated-menu-button/animated-menu-button";
// import MobileNav from '../mobileNav/MobileNav'
import MobileNavBar from "./components/mobilenavbar/mobilenavbar";
import Fade from "@mui/material/Fade";
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
  const [currentLink, setCurrentLink] = useState<string>("");
  const [previousLinkName, setPreviousLink] = useState<string>("");

  const isAtBottom = useAtBottom({ offset: 10 });
  const onChangeActiveLink = (linkName: string) => {
    console.log("active");

    setCurrentLink(linkName);
  };
  const onChangeInActiveLink = (linkName: string) => {
    if (linkName === "about" && currentLink === "about") {
      setCurrentLink("");
      setPreviousLink("");
    } else {
      setPreviousLink(linkName);
    }
  };

  const baseNavStyle = styles.navitem;
  const selectedBaseStyle = styles["navitem-selected"];

  console.log(
    "previousLink",
    previousLinkName,
    "    currentLink: ",
    currentLink
  );

  // console.log("scrollspy", scrollSpy.scrollSpyContainers);
  const showLinkName = currentLink.length > 0;

  let adjustedCurrentLinkName = isAtBottom
    ? "Contact"
    : currentLink.length > 0
    ? currentLink
    : "About";

  if (adjustedCurrentLinkName.length > 0) {
    adjustedCurrentLinkName =
      adjustedCurrentLinkName[0].toUpperCase() +
      adjustedCurrentLinkName.substring(1);
  }

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
              onSetActive={onChangeActiveLink}
              onSetInactive={onChangeInActiveLink}
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
              onSetActive={onChangeActiveLink}
              onSetInactive={onChangeInActiveLink}
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
              onSetActive={onChangeActiveLink}
              onSetInactive={onChangeInActiveLink}
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
              onSetActive={onChangeActiveLink}
              onSetInactive={onChangeInActiveLink}
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
              onSetActive={onChangeActiveLink}
              onSetInactive={onChangeInActiveLink}
            >
              CONTACT
            </Link>
          </div>
        </div>
        <Fade className={styles.title} in={showLinkName} timeout={500}>
          <p>{adjustedCurrentLinkName}</p>
        </Fade>

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

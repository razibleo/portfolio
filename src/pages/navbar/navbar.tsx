import React, { FC, useCallback, useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Link, Events } from "react-scroll";
import useAtBottom from "../../shared/hooks/useAtbottom";
// import MobileNav from '../mobileNav/MobileNav'
export const navBarHeight = 60;
export const adujustedOffset = -navBarHeight;

enum Navlink {
  about = "about",
  experience = "experience",
  projects = "projects",
  awards = "awards",
  contact = "contact",
  unknown = "unknown,",
}
const NavlinkFromString = (value: String): Navlink =>
  Object.values(Navlink).find(
    (item) => item.toLocaleLowerCase() === value.toLowerCase()
  ) ?? Navlink.unknown;

const Navbar: FC = () => {
  const [mobilenavVisible, setMobilenavVisible] = useState<boolean>(false);
  const [hamburgerClass, setHamburgerClass] = useState<string>("");
  const [selectedNavLink, setSelectedNavLink] = useState<Navlink>(
    Navlink.unknown
  );
  const isAtBottom = useAtBottom({ offset: 0 });
  // console.log("isAtBottom", isAtBottom);

  const baseNavStyle = styles.navitem;
  const selectedBaseStyle = styles["navitem-selected"];

  const getStyleFromNavLink = useCallback(
    (navlink: Navlink) => {
      if (selectedNavLink === navlink) {
        return selectedBaseStyle;
      }

      if (navlink === Navlink.contact && isAtBottom) {
        return selectedBaseStyle;
      }

      return "";
    },
    [baseNavStyle, selectedBaseStyle, selectedNavLink, isAtBottom]
  );

  useEffect(() => {
    Events.scrollEvent.register("begin", (to: string, element: any) => {
      const currentNavlinkPressed = NavlinkFromString(to);
      setSelectedNavLink(currentNavlinkPressed);
    });
    Events.scrollEvent.register("end", (to: string, element: any) => {
      setSelectedNavLink(Navlink.unknown);
    });

    return () => {
      console.log("removed scroll listener");
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleMobilenavVisible = () => {
    setMobilenavVisible(!mobilenavVisible);
    if (hamburgerClass === "") {
      setHamburgerClass("open");
    } else {
      setHamburgerClass("");
    }
  };
  return (
    <nav
      style={{ "--navbar-height": `${navBarHeight}px` } as React.CSSProperties}
      className={styles.navbar}
    >
      <div className={styles.navlinks}>
        <div className={styles["navlink-wrapper"]}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={adujustedOffset}
            className={styles.navitem}
            activeClass={styles["navitem-selected"]}
          >
            ABOUT
          </Link>
        </div>
        <div className={styles["navlink-wrapper"]}>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            offset={adujustedOffset}
            className={styles.navitem}
            activeClass={styles["navitem-selected"]}
          >
            EXPERIENCE
          </Link>
        </div>
        <div className={styles["navlink-wrapper"]}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={adujustedOffset}
            className={styles.navitem}
            activeClass={styles["navitem-selected"]}
          >
            PROJECTS
          </Link>
        </div>

        <div className={styles["navlink-wrapper"]}>
          <Link
            to="awards"
            spy={true}
            smooth={true}
            duration={500}
            offset={adujustedOffset}
            className={styles.navitem}
            activeClass={
              isAtBottom ? styles.navitem : styles["navitem-selected"]
            }
          >
            AWARDS
          </Link>
        </div>
        <div className={styles["navlink-wrapper"]}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={adujustedOffset}
            className={isAtBottom ? styles["navitem-selected"] : styles.navitem}
            activeClass={styles["navitem-selected"]}
          >
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

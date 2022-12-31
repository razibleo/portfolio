import { FC } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-scroll";
import { adujustedOffset } from "../../navbar";
import useAtBottom from "../../../../shared/hooks/useAtbottom";

interface Props {
  isOpened: boolean;
  onPressedLink: VoidFunction;
}
const MobileNavBar: FC<Props> = (props) => {
  const isAtBottom = useAtBottom({ offset: 10 });
  const baseNavStyle = styles.navitem;
  const selectedBaseStyle = styles["navitem-selected"];

  return (
    <section
      className={styles.wrapper + " " + (props.isOpened ? styles.open : "")}
    >
      <div className={styles.navbar}>
        <Link
          to="about"
          spy={true}
          // smooth={true}
          duration={500}
          offset={adujustedOffset}
          className={baseNavStyle}
          activeClass={selectedBaseStyle}
          onClick={props.onPressedLink}
        >
          ABOUT
        </Link>
        <Link
          to="experience"
          spy={true}
          // smooth={true}
          duration={500}
          offset={adujustedOffset}
          className={baseNavStyle}
          activeClass={selectedBaseStyle}
          onClick={props.onPressedLink}
        >
          EXPERIENCE
        </Link>{" "}
        <Link
          to="projects"
          spy={true}
          // smooth={true}
          duration={500}
          offset={adujustedOffset}
          className={baseNavStyle}
          activeClass={selectedBaseStyle}
          onClick={props.onPressedLink}
        >
          PROJECTS
        </Link>
        <Link
          to="awards"
          spy={true}
          // smooth={true}
          duration={500}
          offset={adujustedOffset}
          className={baseNavStyle}
          activeClass={isAtBottom ? baseNavStyle : selectedBaseStyle}
          onClick={props.onPressedLink}
        >
          AWARDS
        </Link>
        <Link
          to="contact"
          spy={true}
          // smooth={true}
          duration={500}
          offset={adujustedOffset}
          className={isAtBottom ? selectedBaseStyle : baseNavStyle}
          activeClass={selectedBaseStyle}
          onClick={props.onPressedLink}
        >
          CONTACT
        </Link>
      </div>
      <div
        className={styles.absorbpointer}
        onTouchStart={props.onPressedLink}
        onClickCapture={props.onPressedLink}
      />
    </section>
  );
};

export default MobileNavBar;

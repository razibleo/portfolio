import { primaryColor } from "../../../theme/colors";
import Assets from "../../../utils/assets";
import styles from "./footer.module.scss";
import Typewriter from "typewriter-effect";

const CustomFooter = () => (
  <footer className={styles.footer}>
    <p className={styles["website-created-with"]}>
      this.<span className={styles.highlight1}>website</span>.
      <span className={styles.highlight2}>createdWith</span>({" "}
      <span role="img" aria-label="thinking">
        ❤️
      </span>{" "}
      ).<span className={styles.highlight2}>using</span>([
      <img src={Assets.REACT_LOGO} /> React.js,{" "}
      <img src={Assets.TYPSCRIPT_LOGO} /> Typescript,{" "}
      <img
        src={Assets.THREEJS_LOGO}
        style={{
          filter: "invert(100%) sepia(0%) saturate(0%)",
        }}
      />{" "}
      Three.js, <img src={Assets.BOOTSTRAP_LOGO} /> Bootstrap,{" "}
      <img src={Assets.SASS_LOGO} />
      Sass])
      <div className={styles.typewriter}>
        <Typewriter
          options={{
            strings: [],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
            cursor: "|",
            delay: 100,
            skipAddStyles: true,
          }}
        />
      </div>
    </p>
  </footer>
);
export default CustomFooter;

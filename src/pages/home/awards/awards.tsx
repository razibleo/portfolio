import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import styles from "./awards.module.css";
import EgaAwardItem from "./items/ega_awardItem";
import UCResearchAwardItem from "./items/uc_reserach_AwardItem";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

const Awards: FC = () => {
  return (
    <Element
      name="awards"
      className={`${styles["awards-wrapper"]} ${styles["awards-content"]}`}
    >
      <SectionHeader title={"Awards"} />
      <div style={{ height: "4em" }} />
      <UCResearchAwardItem />
      <Fade duration={1000}>
        <div className={styles["separator"]} />
      </Fade>
      <EgaAwardItem />
    </Element>
  );
};
export default Awards;

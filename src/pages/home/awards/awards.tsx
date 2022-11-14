import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import styles from "./awards.module.css";
import EgaAwardItem from "./items/ega_awardItem";
import UCResearchAwardItem from "./items/uc_reserach_AwardItem";

const Awards: FC = () => {
  return (
    <div className={`${styles["awards-wrapper"]} ${styles["awards-content"]}`}>
      <SectionHeader title={"Awards"} />
      <div style={{ height: "4em" }} />
      <UCResearchAwardItem />
      <div className={styles["separator"]} />
      <EgaAwardItem />
    </div>
  );
};
export default Awards;

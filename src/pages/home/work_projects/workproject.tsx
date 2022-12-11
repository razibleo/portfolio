import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";

import styles from "./workproject.module.scss";
import EievProjectItem from "./items/eiev/eiev";

const WorkProjects: FC = () => {
  return (
    <div className={styles["projects-wrapper"]}>
      <SectionHeader title={"Work Projects"} />
      <div className={styles["project-content"]}>
        <EievProjectItem />
      </div>
    </div>
  );
};
export default WorkProjects;

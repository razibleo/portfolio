import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";

import styles from "./workproject.module.scss";
import EievProjectItem from "./items/eiev/eiev";
import ERCProjectItem from "./items/erc/erc";
import OtherWorkProjects from "./other/other_work_projects";
import { Element } from "react-scroll";

const WorkProjects: FC = () => {
  return (
    <Element name="work_projects" className={styles["projects-wrapper"]}>
      <SectionHeader title={"Work Projects"} />
      <div className={styles["project-content"]}>
        <EievProjectItem />
        <ERCProjectItem />
        <OtherWorkProjects />
      </div>
    </Element>
  );
};
export default WorkProjects;

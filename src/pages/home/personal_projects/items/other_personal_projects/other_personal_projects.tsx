import { FC } from "react";
import styles from "./other_personal_projects.module.scss";
import { personalprojects } from "../../../../../data/projects";
import ProjectCard from "../../../../../shared/components/cards/projectcard/projectcard";

const OtherWorkProjects: FC = () => {
  return (
    <>
      <h3 className={styles["title"]}>Other Projects I've contributed</h3>

      <div className={styles["grid-view"]}>
        {personalprojects.map((personalprojectitem) => {
          return <ProjectCard workproject={personalprojectitem} />;
        })}
      </div>
    </>
  );
};

export default OtherWorkProjects;

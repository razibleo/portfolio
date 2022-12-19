import { FC } from "react";
import styles from "./other_personal_projects.module.scss";
import { personalprojects } from "../../../../../data/projects";
import ProjectCard from "../../../../../shared/components/cards/projectcard/projectcard";
// import { primaryBackgroundColor } from "../../../../../theme/colors";

const OtherWorkProjects: FC = () => {
  return (
    <>
      <h3 className={styles["title"]}>Some of my other work</h3>

      <div className={styles["grid-view"]}>
        {personalprojects.map((personalprojectitem, index) => {
          return (
            <ProjectCard
              projectitem={personalprojectitem}
              // imageBackgroundColor={primaryBackgroundColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default OtherWorkProjects;

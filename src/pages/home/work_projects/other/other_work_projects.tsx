import { FC } from "react";
import styles from "./other_work_projects.module.scss";
import WorkProjectCard from "../../../../shared/components/cards/projectcard/projectcard";
import { workprojects } from "../../../../data/projects";

const OtherWorkProjects: FC = () => {
  return (
    <>
      <h3 className={styles["title"]}>Other Projects I've contributed</h3>

      <div className={styles["grid-view"]}>
        {workprojects.map((workprojectitem) => {
          return <WorkProjectCard projectitem={workprojectitem} />;
        })}
      </div>
    </>
  );
};

export default OtherWorkProjects;

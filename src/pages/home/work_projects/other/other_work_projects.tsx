import { FC } from "react";
import styles from "./other_work_projects.module.scss";
import WorkProjectCard from "../../../../shared/components/cards/projectcard/projectcard";
import { workprojects } from "../../../../data/projects_data";
import Zoom from "react-reveal/Zoom";

const OtherWorkProjects: FC = () => {
  return (
    <>
      <h3 className={styles["title"]}>Other Projects I've contributed</h3>

      <div className={styles["grid-view"]}>
        {workprojects.map((workprojectitem, index) => {
          return (
            <span
              key={`otherworkprojects-card-${workprojectitem.title}-${index}`}
            >
              <Zoom>
                <WorkProjectCard projectitem={workprojectitem} />
              </Zoom>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default OtherWorkProjects;

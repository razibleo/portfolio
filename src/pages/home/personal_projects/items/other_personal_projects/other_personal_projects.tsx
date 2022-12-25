import { FC } from "react";
import styles from "./other_personal_projects.module.scss";
import { personalprojects } from "../../../../../data/projects_data";
import ProjectCard from "../../../../../shared/components/cards/projectcard/projectcard";
import Zoom from "react-reveal/Zoom";
// import { primaryBackgroundColor } from "../../../../../theme/colors";

const OtherWorkProjects: FC = () => {
  const gridItemHeight = "300px";
  return (
    <div
      style={
        {
          "--grid-item-height": gridItemHeight,
        } as React.CSSProperties
      }
    >
      <h3 className={styles["title"]}>Some of my other work</h3>

      <div className={styles["grid-view"]}>
        {personalprojects.map((personalprojectitem, index) => {
          return (
            <Zoom>
              <div
                style={
                  {
                    width: "100%",
                    height: gridItemHeight,
                  } as React.CSSProperties
                }
              >
                <ProjectCard
                  projectitem={personalprojectitem}
                  // imageBackgroundColor={primaryBackgroundColor}
                />
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default OtherWorkProjects;

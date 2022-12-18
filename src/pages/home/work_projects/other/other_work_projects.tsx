import { FC } from "react";
import styles from "./other_work_projects.module.scss";
import AppleIcon from "../../../../shared/components/buttons/appstore_button/apple_icon";
import GooglePlayIcon from "../../../../shared/components/buttons/appstore_button/google_play_Icon";
import workprojects, { MobileWorkProject } from "../../../../data/workprojects";

const OtherWorkProjects: FC = () => {
  return (
    <>
      <h3 className={styles["title"]}>Other Projects I've contributed</h3>

      <div className={styles["grid-view"]}>
        {workprojects.map((workprojectitem) => {
          const isMobileProject = workprojectitem instanceof MobileWorkProject;
          return (
            <div
              className={styles["grid-item"]}
              onClick={(e) => {
                window.open(workprojectitem.websiteurl, "_blank");
              }}
            >
              <div className={styles.summary}>
                <div className={styles["image-wrapper"]}>
                  <img
                    className={styles["project-image"]}
                    alt={`${workprojectitem.title} screenshots`}
                    src={workprojectitem.projectscreenshot}
                  />
                </div>

                <h5 className={styles.title}>{workprojectitem.title}</h5>
              </div>
              <div className={styles.details}>
                <div className={styles.content}>
                  <h5 className={styles.title}>{workprojectitem.title}</h5>
                  <p className={styles.description}>
                    {workprojectitem.description}
                  </p>
                  {isMobileProject && (
                    <div className={styles["availableon-section"]}>
                      <img
                        alt={`${workprojectitem.title} app logo`}
                        className={styles.logo}
                        src={workprojectitem.projectlogo}
                      />
                      <div>
                        <h6>Available on:</h6>
                        <div className={styles["store-wrapper"]}>
                          <GooglePlayIcon
                            className={styles["store-icon"]}
                            urlToOpen={workprojectitem.googleplayUrl}
                          />
                          <AppleIcon
                            className={styles["store-icon"]}
                            urlToOpen={workprojectitem.appstoreUrl}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OtherWorkProjects;

import { FC } from "react";
import styles from "./projectcard.module.scss";
import GooglePlayIcon from "../../buttons/appstore_button/google_play_Icon";
import AppleIcon from "../../buttons/appstore_button/apple_icon";
import MobileWorkProject from "../../../../models/project/mobileworkproject";
import Project from "../../../../models/project/project";
import PersonalProject from "../../../../models/project/personalproject";
import HoverButton, {
  HoverButtonIconType,
} from "../../buttons/hover_button/hoverbutton";
import { primaryColor } from "../../../../theme/colors";

interface Props {
  projectitem: Project;
  imageBackgroundColor?: string;
  imageBorderColor?: string | null;
}

const WorkProjectCard: FC<Props> = (props: Props) => {
  const projectitem = props.projectitem;

  const isMobileWorkProject = projectitem instanceof MobileWorkProject;
  const isPersonalProject = projectitem instanceof PersonalProject;

  return (
    <div
      className={styles["grid-item"]}
      onClick={
        isMobileWorkProject
          ? (e) => {
              if (projectitem.websiteurl == null) {
                return;
              }
              window.open(projectitem.websiteurl, "_blank");
            }
          : undefined
      }
    >
      <div className={styles.summary}>
        <div
          className={styles["image-wrapper"]}
          style={
            {
              "--image-background-color":
                props.imageBackgroundColor ?? "transparent",
              "--image-border":
                props.imageBackgroundColor != null
                  ? `2px solid ${props.imageBorderColor}`
                  : null,
            } as React.CSSProperties
          }
        >
          <img
            className={styles["project-image"]}
            alt={`${projectitem.title} screenshots`}
            src={projectitem.projectscreenshot}
          />
        </div>

        <h5 className={styles.title}>{projectitem.title}</h5>
      </div>
      <div className={styles.details}>
        <div className={styles.content}>
          <h5 className={styles.title}>{projectitem.title}</h5>
          <p className={styles.description}>{projectitem.description}</p>
          {isMobileWorkProject && (
            <div className={styles["availableon-section"]}>
              <img
                alt={`${projectitem.title} app logo`}
                className={styles.logo}
                src={projectitem.projectlogo}
              />
              <div>
                <h6>Available on:</h6>
                <div className={styles["store-wrapper"]}>
                  <GooglePlayIcon
                    className={styles["store-icon"]}
                    urlToOpen={projectitem.googleplayUrl}
                  />
                  <AppleIcon
                    className={styles["store-icon"]}
                    urlToOpen={projectitem.appstoreUrl}
                  />
                </div>
              </div>
            </div>
          )}

          {isPersonalProject && (
            <div className={styles["tech-stack-section"]}>
              <h6 className={styles["title"]}>Tech Stacks:</h6>
              <div className={styles["wrapper"]}>
                {projectitem.stacks.map((e, index) => {
                  return (
                    <div
                      className={styles["tech-stack-item"]}
                      key={`project-item-${index}`}
                    >
                      <img src={e.logoPath} alt={`${e.name} logo`} />
                      <p className={styles["name"]}>{e.name}</p>
                    </div>
                  );
                })}
              </div>
              <div style={{ height: "8px" }} />

              <div className={styles["project-resource-btn"]}>
                <HoverButton
                  title={"</> Source Code"}
                  urlToOpen={projectitem.githubUrl}
                  fontSize={12}
                  padding={"0.5em 1.1em"}
                  width={"100%"}
                />
                <div style={{ height: "12px" }} />
                {projectitem.demoUrl != null && (
                  <HoverButton
                    title={"Demo"}
                    urlToOpen={projectitem.demoUrl}
                    fontSize={12}
                    padding={"0.25em 1.1em"}
                    icon={HoverButtonIconType.launch}
                    width={"100%"}
                    borderColor={primaryColor}
                    textColor={primaryColor}
                    hoverColor={primaryColor}
                    hoverTextColor={"black"}
                    hoverBorderColor={primaryColor}
                    iconWidth={15}
                    iconMargin={"0 4px"}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkProjectCard;

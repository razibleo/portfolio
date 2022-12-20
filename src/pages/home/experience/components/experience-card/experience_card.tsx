import TechStack from "../../../../../models/techstack";
import styles from "./experience_card.module.scss";

interface ExperienceCardProps {
  link: string;
  company: string;
  companyImageUrl: string;
  companyLogoBackgroundColor?: string;
  companyBackGroundUrl: string;
  title: string;
  dateFrom: string;
  dateTo: string;
  info: string[];
  stack: TechStack[];
  logoheight: number;
  colourPrimary?: string;
  colourSecondary: string;
  logowidth?: string;
}

const ExperienceCard = (experience: ExperienceCardProps) => {
  let { link, company, companyImageUrl, title, dateFrom, dateTo, info, stack } =
    experience;
  return (
    <a
      className={styles["experience-link"]}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles["experience-card-wrapper"]}>
        <div className={styles["experience-card"]}>
          <div className={styles["experience-card-top"]}>
            <div className={styles["experience-bg-wrapper"]}>
              <div
                className={styles["experience-bg"]}
                style={
                  {
                    "--exp-background-color":
                      experience.colourPrimary ?? "transparent",
                    "--exp-background-url": `url(${experience.companyBackGroundUrl})`,
                  } as React.CSSProperties
                }
              />

              <div className={styles["experience-bg-overlay"]} />
              <div className={styles["experience-bg-bottom"]} />

              <h2>{company}</h2>

              <div
                className={styles["image-wrapper"]}
                style={
                  {
                    "--image-logo-background":
                      experience.companyLogoBackgroundColor ?? "transparent",
                  } as React.CSSProperties
                }
              >
                <div
                  className={styles["experience-bg logo-bg"]}
                  style={{
                    background: experience.colourSecondary
                      ? experience.colourSecondary
                      : experience.colourPrimary,
                  }}
                />
                <img
                  className={styles["company-logo"]}
                  src={companyImageUrl}
                  style={
                    experience.logoheight
                      ? {
                          height: `${experience.logoheight}%`,
                        }
                      : { width: `${experience.logowidth}%` }
                  }
                />
              </div>
            </div>
          </div>

          <div className={styles["experience-card-bottom"]}>
            <div>
              <h2>{title}</h2>
              <h3>
                {dateFrom} - {dateTo}
              </h3>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles["experience-card-tech"]}>
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>
                    <img
                      className={`${styles.techstackIcon}`}
                      src={tech.logoPath}
                      style={
                        {
                          filter: ` invert(${
                            tech.logoInversionColorLevel * 100
                          }%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(200%) contrast(2200%)`,
                        } as React.CSSProperties
                      }
                    />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;

import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import ExperienceCard from "./components/experience-card/experience_card";
import styles from "./experience.module.scss";
import Assets from "../../../utils/assets";
import experiences from "../../../data/experience_data";
import dateHelper from "../../../utils/datehelper";
const Experience: FC = () => {
  return (
    <div id="experience" className={styles["experience-wrapper"]}>
      <SectionHeader title={"Experience"} />

      <div className={styles["exp-card-section"]}>
        {experiences.map((e, index) => {
          return (
            <div style={{ width: "390px" }}>
              <ExperienceCard
                link={e.companyUrl}
                companyBackGroundUrl={e.companyBackgroundUrl}
                companyLogoBackgroundColor={index == 1 ? "black" : "white"}
                companyImageUrl={e.companyLogo}
                company={e.companyName}
                title={e.positionTitle}
                dateFrom={dateHelper.monthYearFormat(e.dateFrom)}
                dateTo={
                  e.dateTo != null
                    ? dateHelper.monthYearFormat(e.dateTo)
                    : "Current"
                }
                info={e.responsibilites}
                stack={e.stacks}
                logoheight={80}
                colourPrimary={"green"}
                colourSecondary={"transparent"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;

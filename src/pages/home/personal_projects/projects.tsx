import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
// import AndroidTicTacToeProjectItem from "./items/android_tic_tac_toe/androidTicTacToeProjectItem";
// import CommuniserveProjectItem from "./items/communiserve/communiserveProjectItem";
import ComputerVisionProjectItem from "./items/computer_vision/computervisionProjectItem";
// import JavaFXGamesProjectItem from "./items/javafxgames/javafxGamesProjectItem";
import ReacherProjectItem from "./items/reacher/reacherProjectItem";
import StackerProjectItem from "./items/stacker/stackerProjectItem";
import TheaterBookingProjectItem from "./items/theater-booking/theaterBookingProjectItem";
import styles from "./projects.module.css";
import OtherPersonalProjects from "./items/other_personal_projects/other_personal_projects";

const PersonalProjects: FC = () => {
  return (
    <div className={styles["projects-wrapper"]}>
      <SectionHeader title={"Personal Projects"} />
      <div className={styles["project-content"]}>
        {/* <AndroidTicTacToeProjectItem /> */}
        <TheaterBookingProjectItem />
        {/* <JavaFXGamesProjectItem /> */}
        {/* <CommuniserveProjectItem /> */}
        <ComputerVisionProjectItem />
        <StackerProjectItem />
        <ReacherProjectItem />
        <OtherPersonalProjects />
      </div>
    </div>
  );
};
export default PersonalProjects;

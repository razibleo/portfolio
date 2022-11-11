import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import AndroidTicTacToeProjectItem from "./items/android_tic_tac_toe/androidTicTacToeProjectItem";
import CommuniserveProjectItem from "./items/communiserve/communiserveProjectItem";
import JavaFXGamesProjectItem from "./items/javafxgames/javafxGamesProjectItem";
import TheaterBookingProjectItem from "./items/theater-booking/theaterBookingProjectItem";
import styles from "./projects.module.css";

const Projects: FC = () => {
  return (
    <div className={styles["projects-wrapper"]}>
      <SectionHeader title={"Projects"} />
      <div className={styles["project-content"]}>
        <AndroidTicTacToeProjectItem />
        <TheaterBookingProjectItem />
        <JavaFXGamesProjectItem />
        <CommuniserveProjectItem />
      </div>
    </div>
  );
};
export default Projects;

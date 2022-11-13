import SectionHeader from "../../../../../shared/components/sectionheader/sectionheader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.css";

const ReacherProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col md={5}>
          <h2 className={styles["project-title"]}>
            Reacher - AI Robot Teacher
          </h2>
          <p className={styles["project-description"]}>
            A native andoid Tic Tac Toe game with multiplayer functionaly via
            bluetooth created using Java.
          </p>
          <div className={styles["techstackssectiom"]}>
            <h5 className={styles["techstackusedtext"]}>
              What's under the hood?
            </h5>
            <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />
            <HoverListItem
              title={"Android SDK"}
              iconPath={Assets.ANDROID_LOGO}
            />
          </div>

          <div className={styles["project-resource-btn"]}>
            <HoverButton
              title={"</> Source Code"}
              urlToOpen={"https://github.com/razibleo/AndoridTicTacToe"}
            />
            <RaisedButton
              title={"Demo"}
              hoverBorderColor={"transparent"}
              borderColor={"transparent"}
              hoverShadowColor={"transparent"}
              urlToOpen={
                "https://drive.google.com/file/d/1kAseXEnMQSw_9HxdolVS0j1U4JasOrKb/view?usp=sharing"
              }
            />
          </div>
        </Col>
        <Col md={7}>
          <div className={"me-3"}>
            <img
              src={Assets.TIC_TAC_TOE_HOME}
              className={styles["project-image"]}
            />
            <img
              src={Assets.TIC_TAC_TOE_GAMEPLAY}
              className={styles["project-image"]}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReacherProjectItem;

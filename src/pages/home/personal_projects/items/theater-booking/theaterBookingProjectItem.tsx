import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.scss";
import Fade from "react-reveal/Fade";

const TheaterBookingProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col
          lg={7}
          className={
            styles["project-image-section"] + " " + styles["xl-images"]
          }
          style={{ paddingTop: "4em" }}
        >
          {_renderImage()}
        </Col>

        <Col lg={5}>
          <h2 className={styles["project-title"]}>Theatre Booking System</h2>

          <p className={styles["project-description"]}>
            A minimalist seat booking system for a movie theatre created using
            javaFX.
          </p>
          <div className={styles["lg-stats-wrapper"]}>{_renderImage()}</div>

          <div className={styles["techstackssectiom"]}>
            <h5 className={styles["techstackusedtext"]}>
              What's under the hood?
            </h5>

            <Fade right duration={1000} distance={"75px"}>
              <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />
              <HoverListItem title={"JavaFX"} iconPath={Assets.JAVAFX_LOGO} />
            </Fade>
          </div>

          <div className={styles["project-resource-btn"]}>
            <HoverButton
              title={"</> Source Code"}
              urlToOpen={"https://github.com/razibleo/TheatreBooking"}
            />
            <div className={styles["raised-button-wrapper"]}>
              <RaisedButton
                title={"Demo"}
                hoverBorderColor={"transparent"}
                borderColor={"transparent"}
                hoverShadowColor={"transparent"}
                urlToOpen={
                  "https://drive.google.com/file/d/1cLd-cyyoYXOILgoO35-yGJ-K5XOyt4_4/view?usp=sharing"
                }
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const _renderImage = () => {
  return (
    <Fade duration={1250}>
      <div style={{ display: "flex", justifyContent: "end" }} className="me-3">
        <img
          src={Assets.THEATER_GIF}
          alt={"Theater Booking System Screenshot"}
          style={{ width: "100%", border: `3px solid green` }}
        />
      </div>
    </Fade>
  );
};

export default TheaterBookingProjectItem;

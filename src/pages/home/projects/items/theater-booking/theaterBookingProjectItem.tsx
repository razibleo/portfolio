import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.css";

const TheaterBookingProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col
          md={7}
          className={styles["project-image-section"]}
          style={{ paddingTop: "4em" }}
        >
          <div
            style={{ display: "flex", justifyContent: "end" }}
            className="me-3"
          >
            <img
              src={Assets.THEATER_GIF}
              style={{ width: "100%", border: `3px solid green` }}
            />
          </div>
        </Col>

        <Col md={5}>
          <h2 className={styles["project-title"]}>Theatre Booking System</h2>
          <p className={styles["project-description"]}>
            A minimalist seat booking system for a movie theatre created using
            javaFX.
          </p>
          <div className={styles["techstackssectiom"]}>
            <h5 className={styles["techstackusedtext"]}>
              What's under the hood?
            </h5>
            <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />
            <HoverListItem title={"JavaFX"} iconPath={Assets.JAVAFX_LOGO} />
          </div>

          <div className={styles["project-resource-btn"]}>
            <HoverButton
              title={"</> Source Code"}
              urlToOpen={"https://github.com/razibleo/TheatreBooking"}
            />
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
        </Col>
      </Row>
    </Container>
  );
};

export default TheaterBookingProjectItem;

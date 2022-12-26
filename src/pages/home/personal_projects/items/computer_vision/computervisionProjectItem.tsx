import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.css";
import Fade from "react-reveal/Fade";

const ComputerVisionProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col md={5}>
          <Fade duration={1000}>
            <>
              <h2 className={styles["project-title"]}>
                Coin Counter & Face Detector
              </h2>
              <p className={styles["project-description"]}>
                Python projects that utilize computer vision to measure the
                value the quanity & value of coins as we all detect the facial
                expressions of a human face running on a Rasperry Pi 4.
              </p>
              <div className={styles["techstackssectiom"]}>
                <h5 className={styles["techstackusedtext"]}>
                  What's under the hood?
                </h5>
                <Fade duration={1000} left distance={"250px"}>
                  <HoverListItem
                    title={"Python"}
                    iconPath={Assets.PYTHON_LOGO}
                    saturation={80}
                  />
                  <HoverListItem
                    title={"OpenCV"}
                    iconPath={Assets.OPENCV_LOGO}
                    saturation={80}
                  />
                  <HoverListItem
                    title={"Raspberry Pi 4"}
                    iconPath={Assets.RASPBERRY_PI_LOGO}
                    saturation={0}
                  />
                  <HoverListItem
                    title={"Camera"}
                    iconPath={Assets.CAMERA_ICON}
                  />
                </Fade>
              </div>

              <div className={styles["project-resource-btn"]}>
                <div>
                  <p style={{ fontSize: "13px", padding: "0 5%", margin: 0 }}>
                    Coin Counter:
                  </p>
                  <HoverButton
                    title={"</> Source Code"}
                    urlToOpen={"https://github.com/razibleo/coin_counter"}
                  />
                </div>
                <div style={{ width: "24px" }} />
                <div>
                  <div>
                    <p style={{ fontSize: "13px", padding: "0 5%", margin: 0 }}>
                      Face Detector:
                    </p>
                    <HoverButton
                      title={"</> Source Code"}
                      urlToOpen={"https://github.com/razibleo/face_detection"}
                    />
                  </div>
                </div>
              </div>
            </>
          </Fade>
        </Col>
        <Col md={7} style={{ paddingTop: "4em" }}>
          <div className={"ms-3"} style={{ position: "relative" }}>
            <Fade duration={1250}>
              <img
                src={Assets.COINCOUNTER_GIF}
                alt={"Coin Counter Screenshot"}
                width="50%"
                className="me-3"
                style={{
                  display: "inline-block",
                  zIndex: "0",
                  position: "relative",
                  /* offset-x | offset-y | blur-radius | spread-radius | color */
                  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                  border: `2px solid red`,
                }}
              />
            </Fade>

            <Fade duration={1000} delay={150}>
              <img
                src={Assets.FACEDETECTION_GIF}
                className="me-3"
                alt={"Face Detection Screenshot"}
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "15%",
                  width: "75%",
                  zIndex: "10",
                  border: `3px solid blue`,

                  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Fade>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ComputerVisionProjectItem;

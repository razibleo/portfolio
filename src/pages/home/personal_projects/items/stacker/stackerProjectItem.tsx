import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.css";
import Fade from "react-reveal/Fade";

const StackerProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col
          md={7}
          className={styles["project-image-section"]}
          style={{ paddingTop: "8em" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              position: "relative",
            }}
            className="me-3"
          >
            <Fade duration={1000} delay={200}>
              <img
                src={Assets.LINE_FOLLOWER_GIF}
                alt={"Line Follower"}
                style={{
                  width: "35%",
                  marginRight: "40%",
                  border: `3px solid green`,
                }}
              />
            </Fade>
            <Fade duration={1000}>
              <img
                src={Assets.COLOR_DETECTION_GIF}
                alt={"Color Detection"}
                style={{
                  width: "45%",
                  top: "5%",
                  border: `3px solid green`,
                  position: "absolute",
                }}
              />
            </Fade>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",

              position: "relative",
            }}
            className="me-3"
          >
            <Fade duration={1000} delay={200}>
              <img
                src={Assets.COLLISION_AVOIDANCE_GIF}
                alt={"Collision Avoidanc"}
                style={{
                  width: "50%",
                  border: `3px solid green`,
                  position: "absolute",
                  right: "33%",
                  marginTop: "-2%",
                  zIndex: "30",
                }}
              />
            </Fade>

            <Fade duration={1000} delay={200}>
              <div
                style={{
                  border: `3px solid green`,
                  marginTop: "-15%",
                  marginRight: "1%",
                  width: "38%",
                  position: "relative",
                  zIndex: "10",
                  display: "inline-block",
                }}
              >
                <img
                  src={Assets.GRIPPER_GIF}
                  alt={"Gripper"}
                  style={{
                    display: "inline-block",
                    width: "101%",

                    clipPath:
                      "polygon(0% 0%, calc(100% - 3px)  0%, calc(100% - 3px) 100%, 0% 100%)",
                  }}
                />
              </div>
            </Fade>
          </div>
        </Col>

        <Col md={5}>
          <Fade duration={1000}>
            <h2 className={styles["project-title"]}>Stacking Robot</h2>
            <p className={styles["project-description"]}>
              A autonomous stacking robot created using OpenCV And a Raspberry
              pi 4 that moves around a environment in search of a colored bloak
              after which it picks it up and goes back to be stacked via a line
              follower.
            </p>
            <div className={styles["techstackssectiom"]}>
              <h5 className={styles["techstackusedtext"]}>
                What's under the hood?
              </h5>
              <Fade right duration={1000} distance={"75px"}>
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
                <HoverListItem title={"Camera"} iconPath={Assets.CAMERA_ICON} />
                <HoverListItem
                  title={"DC Motors"}
                  iconPath={Assets.DCMOTOR_ICON}
                />
                <HoverListItem title={"Servos"} iconPath={Assets.SERVO_ICON} />
                <HoverListItem
                  title={"Ultrasonic Sensors"}
                  iconPath={Assets.ULTRASOUND_ICON}
                />
                <HoverListItem
                  title={"Line Follower Sensors"}
                  iconPath={Assets.LINECURVE_ICON}
                />
              </Fade>
            </div>

            <div className={styles["project-resource-btn"]}>
              <HoverButton
                title={"</> Source Code"}
                urlToOpen={"https://github.com/razibleo/stacking_robot"}
              />
              <div style={{ width: "8px" }} />

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
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default StackerProjectItem;

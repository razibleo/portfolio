import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.scss";
import Fade from "react-reveal/Fade";

const StackerProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col
          lg={6}
          style={{
            paddingTop: "8em",
            display: "flex",
            justifyContent: "flex-end",
          }}
          className={
            styles["project-image-section"] + " " + styles["xl-images"]
          }
        >
          <div className={styles["stacker-image-wrapper"]}>
            {_renderImage()}
          </div>
        </Col>

        <Col lg={6}>
          <Fade duration={1000}>
            <h2 className={styles["project-title"]}>Stacking Robot</h2>
            <p className={styles["project-description"]}>
              A autonomous stacking robot created using OpenCV And a Raspberry
              pi 4 that moves around a environment in search of a colored bloak
              after which it picks it up and goes back to be stacked via a line
              follower.
            </p>
            <div
              className={styles["lg-stats-wrapper"]}
              style={{ width: "70%" }}
            >
              {_renderImage()}
            </div>
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
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

const _renderImage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Fade duration={1000}>
          <img
            src={Assets.COLOR_DETECTION_GIF}
            alt={"Color Detection"}
            style={{
              width: "120%",
              top: "-5%",
              border: `3px solid green`,
              zIndex: 1000,
            }}
          />
        </Fade>

        <Fade duration={1000} delay={200}>
          <img
            src={Assets.GRIPPER_GIF}
            alt={"Gripper"}
            style={{
              width: "98%",
              textAlign: "right",
              marginTop: "12px",
              border: `3px solid green`,
              clipPath:
                "polygon(0% 0%, calc(100% - 3px)  0%, calc(100% - 3px) 100%, 0% 100%)",
            }}
          />
        </Fade>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "0%",
          marginTop: "-4%",
        }}
      >
        <Fade duration={1000} delay={200}>
          <img
            src={Assets.LINE_FOLLOWER_GIF}
            alt={"Line Follower"}
            style={{
              width: "100%",
              border: `3px solid green`,
            }}
          />
        </Fade>
        <Fade duration={1000} delay={200}>
          <img
            src={Assets.COLLISION_AVOIDANCE_GIF}
            alt={"Collision Avoidance"}
            style={{
              width: "130%",
              border: `3px solid green`,
              right: "33%",
              marginTop: "-8%",
              marginLeft: "-8%",
              zIndex: 30,
            }}
          />
        </Fade>
      </div>
    </div>
  );
};

export default StackerProjectItem;

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.scss";
import { HoverButtonIconType } from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import Fade from "react-reveal/Fade";

const ReacherProjectItem = () => {
  return (
    <Container
      fluid
      className={styles["projectitem-wrapper"]}
      style={{ paddingBottom: 0 }}
    >
      <Row>
        <Col lg={5}>
          <Fade duration={1000}>
            <>
              <h2 className={styles["project-title"]}>
                Reacher - AI Robot Teacher
              </h2>
              <p className={styles["project-description"]}>
                Reacher is an AI & computer-vision based teaching assistant and
                exam proctoring robot that primarily consists of 5 subsystems:{" "}
                <strong>(a)</strong> an autonomous navigation subsystem for exam
                proctoring, <strong>(b)</strong> a trained LSTM model for
                cheating detection, <strong>(c)</strong> a contactless CV-based
                exam paper scanning subsystem, <strong>(d)</strong> a
                human-robot voice interaction subsystem, <strong>(e)</strong>{" "}
                and an academic content personalization subsystem.
              </p>
              <div className={styles["lg-stats-wrapper"]}>{_renderImage()}</div>

              <div className={styles["techstackssectiom"]}>
                <h5 className={styles["techstackusedtext"]}>
                  What's under the hood?
                </h5>

                <Fade duration={1000} left distance={"75px"}>
                  <HoverListItem
                    title={"Python"}
                    iconPath={Assets.PYTHON_LOGO}
                    saturation={80}
                  />
                  <HoverListItem title={"Flask"} iconPath={Assets.FLASK_LOGO} />

                  <HoverListItem
                    title={"ROS"}
                    iconPath={Assets.ROS_LOGO}
                    iconPadding="8px 8px 8px 0px"
                  />
                  <HoverListItem
                    title={"Turtlebot 2"}
                    iconPath={Assets.TURTLEBOTLOGO}
                    saturation={90}
                  />
                  <HoverListItem title={"Lidar"} iconPath={Assets.LIDAR_ICON} />
                  <HoverListItem
                    title={"Depth Sensor"}
                    iconPath={Assets.DEPTH_SENSOR_ICON}
                  />
                  <HoverListItem
                    title={"DialogFlowCX"}
                    iconPath={Assets.DIALOGFLOWCX_LOGO}
                    saturation={90}
                  />
                  <HoverListItem
                    title={"Porcupine"}
                    iconPath={Assets.PICOVOICE_LOGO}
                  />
                  <HoverListItem title={"Ionic"} iconPath={Assets.IONIC_LOGO} />
                  <HoverListItem
                    title={"Angular"}
                    iconPath={Assets.ANGULAR_LOGO}
                  />
                  <HoverListItem
                    title={"OpenCV"}
                    iconPath={Assets.OPENCV_LOGO}
                    saturation={80}
                  />
                  <HoverListItem title={"P5.js"} iconPath={Assets.P5JS_LOGO} />

                  <HoverListItem
                    title={"Turicreate"}
                    iconPath={Assets.TURICREATE_LOGO}
                  />
                  <HoverListItem
                    title={"Matlab"}
                    iconPath={Assets.MATLAB_LOGO}
                  />
                  <HoverListItem
                    title={"LSTM-based CNN"}
                    iconPath={Assets.BRAIN_AI_ICON}
                  />

                  <HoverListItem
                    title={"TTS & STT"}
                    iconPath={Assets.TTS_ICON}
                  />
                  <HoverListItem
                    title={"Websockets"}
                    iconPath={Assets.WEBSOCKETS_LOGO}
                  />
                  <HoverListItem
                    title={"RESTful APIs"}
                    iconPath={Assets.JSON_LOGO}
                  />
                </Fade>
              </div>

              <div className={styles["project-resource-btn-top"]}>
                <div>
                  <HoverButton
                    icon={HoverButtonIconType.launch}
                    title={"Presentation"}
                    urlToOpen={
                      "https://docs.google.com/presentation/d/1SfcnnYBrp54WCK-vey3FcF5-NrohfWx8/edit?usp=sharing&ouid=114847083521454778339&rtpof=true&sd=true "
                    }
                  />
                  <div style={{ height: "14px" }} />

                  <HoverButton
                    icon={HoverButtonIconType.article}
                    title={"View Publication"}
                    urlToOpen={"https://www.mdpi.com/2076-3417/11/21/10449"}
                  />
                </div>

                {/* <RaisedButton
              title={"Presentation"}
              fontSize={13}
              hoverBorderColor={"transparent"}
              borderColor={"transparent"}
              hoverShadowColor={"transparent"}
              urlToOpen={
                "https://docs.google.com/presentation/d/1SfcnnYBrp54WCK-vey3FcF5-NrohfWx8/edit?usp=sharing&ouid=114847083521454778339&rtpof=true&sd=true "
              }
            /> */}
                <RaisedButton
                  title={"Demo"}
                  hoverBorderColor={"transparent"}
                  borderColor={"transparent"}
                  hoverShadowColor={"transparent"}
                  urlToOpen={
                    "https://www.youtube.com/watch?v=vZH21VyiZFY&list=PLGoghKuPV1BFEnL86wTrb4rdy7vxj0sud"
                  }
                />
              </div>
            </>
          </Fade>
        </Col>
        <Col
          lg={7}
          style={{ paddingTop: "6em" }}
          className={styles["xl-images"]}
        >
          {_renderImage()}
        </Col>
      </Row>
    </Container>
  );
};
const _renderImage = () => {
  return (
    <div className={"me-3"} style={{ width: "80%" }}>
      <div>
        <Fade duration={1000}>
          <img
            src={Assets.REACHER_CHATBOT_GIF}
            alt={"Chatbot Demo"}
            // className={styles["project-image"]}
            style={{ width: "49%" }}
          />
        </Fade>
        <div style={{ width: "2%", display: "inline-block" }} />
        <Fade duration={1000}>
          <img
            src={Assets.REACHER_COLLISION_AVOIDANCE_GIF}
            alt={"Collision Avoidance Demo"}
            // className={styles["project-image"]}
            style={{ width: "49%" }}
          />
        </Fade>

        <Fade duration={1000}>
          <img
            src={Assets.REACHER_NAVIGATION_GIF}
            alt={"Navigation Demo Map"}
            // className={styles["project-image"]}
            style={{ width: "100%", paddingTop: "1em" }}
          />
        </Fade>
      </div>

      <div>
        <Fade duration={1000}>
          <img
            src={Assets.REACHER_NAVIGATION_INTERNAL_GIF}
            alt={"Chatbot Demo"}
            // className={styles["project-image"]}
            style={{ width: "100%", padding: "1em 0" }}
          />
        </Fade>
        <Fade duration={1000}>
          <img
            src={Assets.REACHER_MAPPING_INTERNAL_GIF}
            alt={"Mapping Demo"}
            // className={styles["project-image"]}
            style={{ width: "49%" }}
          />
        </Fade>
        <div style={{ width: "2%", display: "inline-block" }} />
        <Fade duration={1000}>
          <img
            src={Assets.REACHER_LOCALIZATION_INTERNAL_GIF}
            alt={"Localization Demo"}
            // className={styles["project-image"]}
            style={{ width: "49%", paddingRight: "2%" }}
          />
        </Fade>
      </div>
    </div>
  );
};
export default ReacherProjectItem;

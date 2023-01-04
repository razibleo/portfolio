import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.scss";
import HorizontalProgressBar from "../../../../../shared/components/progressbar/horizontal_progress_bar/horizontal_progress_bar";
import AppStoreButton, {
  AppStoreButtonType,
} from "../../../../../shared/components/buttons/appstore_button/appstore_button";
import CountUp from "react-countup";
import { StarRate } from "@mui/icons-material";
import Fade from "react-reveal/Fade";
import TrackVisibility from "react-on-screen";

const EievProjectItem = () => (
  <Container fluid className={styles["projectitem-wrapper"]}>
    <Row>
      <Col xl={7} xxl={5}>
        <Fade duration={1500}>
          <div className={styles.content}>
            <h2 className={styles["project-title"]}>
              Emirates Endurance International Village
            </h2>
            <p className={styles["project-description"]}>
              <strong>EIEV</strong> is the official equastrian sports
              application for{" "}
              <a href="https://www.eiev.ae/en/">
                Emirates Endurance International Village
              </a>
              . Search for race results, horse records & so much more in an
              instant and stay updated with the latest results, horse stats and
              rider info of international events. Take videos and share your
              precious moments.
            </p>
            {/* <div className={styles["techstackssectiom"]}>
            <h5 className={styles["techstackusedtext"]}>
            What's under the hood?
            </h5>
            <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />
            <HoverListItem title={"Android SDK"} iconPath={Assets.ANDROID_LOGO} />
          </div> */}
            <Container fluid className={styles["lg-stats-wrapper"]}>
              <Row>
                <Col md={5} className={styles["mobile-image"]}>
                  {_renderImages()}
                </Col>

                <Col md={7} className={styles["stats-section"]}>
                  {_renderStatsSection()}
                </Col>
                <Col md={5} className={styles["tablet-image"]}>
                  {_renderImages()}
                </Col>
              </Row>
            </Container>
            <div className={styles["xl-stats-wrapper"]}>
              {_renderStatsSection()}
            </div>
          </div>
        </Fade>
      </Col>
      <Col
        xl={5}
        xxl={7}
        className={styles["flex-start"] + " " + styles["xl-images"]}
      >
        {_renderImages()}
      </Col>
    </Row>
  </Container>
);

export default EievProjectItem;

const _renderImages = () => {
  return (
    <div className={styles["images-wrapper"]}>
      <Fade duration={1000} right>
        <img
          src={Assets.EIEV_HOME}
          alt={"EIEV App Homescreen"}
          className={styles["project-image"]}
        />
      </Fade>

      <Fade duration={750} delay={300} right>
        <img
          src={Assets.EIEV_SOCIAL}
          alt={"EIEV App Video Reel"}
          className={styles["project-image"] + " " + styles["right-offset"]}
        />
      </Fade>
    </div>
  );
};

const _renderStatsSection = () => {
  return (
    <>
      <TrackVisibility once style={{ width: "100%" }}>
        {({ isVisible }) => {
          return (
            <div className={styles.statistics}>
              <img
                className={styles.appicon}
                alt={"EIEV app icon"}
                src={Assets.EIEV_LOGO}
                style={{
                  filter:
                    "invert(5%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(200%) contrast(100%)",
                }}
              />
              <div className={styles["downloads-section"]}>
                <h5 className={styles.value}>
                  <CountUp
                    end={isVisible ? 5000 : 0}
                    duration={1.22}
                    separator=","
                  />
                  +
                </h5>
                <h5 className={styles.title}>Downloads</h5>
              </div>
              <div className={styles.divider} />
              <div className={styles.value}>
                <StarRate className={styles["star-icon"]} />
                <CountUp
                  end={isVisible ? 4.5 : 0}
                  duration={1.22}
                  decimals={1}
                />
                /5.0
              </div>
            </div>
          );
        }}
      </TrackVisibility>
      <HorizontalProgressBar percentageFill={4.5 / 5.0} />
      <div className={styles["project-resource-btn"]}>
        <AppStoreButton
          className={styles.appstorebutton}
          buttonType={AppStoreButtonType.googleplay}
          urlToOpen={
            "https://play.google.com/store/apps/details?id=com.adec.eiev&hl=en&gl=US"
          }
        />
        <span className={styles["appstore-buttons-spacing"]} />
        <AppStoreButton
          className={styles.appstorebutton}
          buttonType={AppStoreButtonType.apple}
          urlToOpen={"https://apps.apple.com/ae/app/eiev/id1529308218"}
        />
      </div>
    </>
  );
};

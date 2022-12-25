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

const ERCProjectItem = () => (
  <Container fluid className={styles["projectitem-wrapper"]}>
    <Row>
      <Col md={7}>
        <div
          style={{ display: "flex", justifyContent: "end" }}
          className="me-3"
        >
          <Fade duration={750} delay={300} left>
            <img
              src={Assets.ERC_PROJECT_SHARE}
              alt={"ERC App Project Share Screenshot"}
              className={styles["project-image"]}
              style={{ width: "40%" }}
            />
          </Fade>

          <Fade duration={1000} left>
            <img
              src={Assets.ERC_HOME}
              alt={"ERC App Homescreen"}
              className={styles["project-image"]}
              style={{
                marginLeft: "-15%",
                width: "40%",
              }}
            />
          </Fade>
        </div>
      </Col>
      <Col md={5}>
        <Fade duration={1500}>
          <h2 className={styles["project-title"]}>Emirates Red Crescent</h2>
          <p className={styles["project-description"]}>
            <strong>Emirates RC</strong> is the official application for{" "}
            <a href="https://www.emiratesrc.ae/">Emirates Red Crescent</a> which
            is the United Arab Emirates affiliate of the{" "}
            <a href="https://www.ifrc.org/">
              International Federation of Red Cross and Red Crescent Societies{" "}
            </a>
            , a worldwide humanitarian organization providing assistance without
            discrimination as to nationality, race, religious beliefs, class or
            political opinions.
          </p>
          {/* <div className={styles["techstackssectiom"]}>
          <h5 className={styles["techstackusedtext"]}>
            What's under the hood?
          </h5>
          <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />

          <HoverListItem title={"Android SDK"} iconPath={Assets.ANDROID_LOGO} />
        </div> */}

          <TrackVisibility once>
            {({ isVisible }) => {
              return (
                <div className={styles.statistics}>
                  <img
                    className={styles.appicon}
                    alt={"ERC App Logo"}
                    src={Assets.ERC_LOGO}
                    style={{
                      filter:
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(100%) contrast(90%)",
                    }}
                  />

                  <span>
                    <h5 className={styles.value}>
                      <CountUp
                        end={isVisible ? 500000 : 0}
                        duration={1.22}
                        separator=","
                      />
                      +
                    </h5>
                    <h5 className={styles.title}>Downloads</h5>
                  </span>
                  <div className={styles.divider} />

                  <span className="center">
                    <h5 className={styles.value}>
                      <StarRate />
                      <CountUp
                        end={isVisible ? 4.7 : 0}
                        duration={1.22}
                        decimals={1}
                      />
                      /5.0
                    </h5>
                  </span>
                </div>
              );
            }}
          </TrackVisibility>

          <HorizontalProgressBar percentageFill={4.7 / 5.0} />

          <div className={styles["project-resource-btn"]}>
            <AppStoreButton
              buttonType={AppStoreButtonType.googleplay}
              urlToOpen={
                "https://play.google.com/store/apps/details?id=ae.rcuae.rcuae_app&hl=en&gl=US"
              }
            />
            <span style={{ width: "20px" }} />
            <AppStoreButton
              buttonType={AppStoreButtonType.apple}
              urlToOpen={
                "https://apps.apple.com/ae/app/emirates-rc/id979176387"
              }
            />
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default ERCProjectItem;

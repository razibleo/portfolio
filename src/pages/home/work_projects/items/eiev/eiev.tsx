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

const EievProjectItem = () => (
  <Container fluid className={styles["projectitem-wrapper"]}>
    <Row>
      <Col md={5}>
        <h2 className={styles["project-title"]}>
          Emirates Endurance International Village
        </h2>
        <p className={styles["project-description"]}>
          <strong>EIEV</strong> is the official equastrian sports application
          for{" "}
          <a href="https://www.eiev.ae/en/">
            Emirates Endurance International Village
          </a>
          . Search for race results, horse records & so much more in an instant
          and stay updated with the latest results, horse stats and rider info
          of international events. Take videos and share your precious moments.
        </p>
        {/* <div className={styles["techstackssectiom"]}>
          <h5 className={styles["techstackusedtext"]}>
            What's under the hood?
          </h5>
          <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />

          <HoverListItem title={"Android SDK"} iconPath={Assets.ANDROID_LOGO} />
        </div> */}
        <div className={styles.statistics}>
          <img className={styles.appicon} src={Assets.EIEV_LOGO} />
          <span>
            <h5 className={styles.value}>
              <CountUp end={2000} duration={1.22} separator="," />+
            </h5>
            <h5 className={styles.title}>Downloads</h5>
          </span>
          <div className={styles.divider} />

          <span className="center">
            <h5 className={styles.value}>
              <StarRate />
              <CountUp end={4.7} duration={1.22} decimals={1} />
              /5.0
            </h5>
          </span>
        </div>
        <HorizontalProgressBar />

        <div className={styles["project-resource-btn"]}>
          <AppStoreButton
            buttonType={AppStoreButtonType.googleplay}
            urlToOpen={
              "https://play.google.com/store/apps/details?id=com.adec.eiev&hl=en&gl=US"
            }
          />
          <span style={{ width: "20px" }} />
          <AppStoreButton
            buttonType={AppStoreButtonType.apple}
            urlToOpen={"https://apps.apple.com/ae/app/eiev/id1529308218"}
          />
        </div>
      </Col>
      <Col md={7}>
        <div className={"me-3"}>
          <img
            src={Assets.EIEV_HOME}
            className={styles["project-image"]}
            style={{ width: "45%" }}
          />
          <img
            src={Assets.EIEV_SOCIAL}
            className={styles["project-image"]}
            style={{
              marginLeft: "-18%",
              width: "45%",
            }}
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default EievProjectItem;

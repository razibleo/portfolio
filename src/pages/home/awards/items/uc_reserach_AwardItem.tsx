import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Assets from "../../../../utils/assets";
import styles from "../awarditems.module.scss";
import HoverButton, {
  HoverButtonIconType,
} from "../../../../shared/components/buttons/hover_button/hoverbutton";
import { primaryColor } from "../../../../theme/colors";
import Fade from "react-reveal/Fade";

const _renderImage = (urlToOpen: string) => {
  return (
    <Fade duration={1500}>
      <div className={"ms-3"}>
        <img
          src={Assets.UC_RESEARCH}
          alt={"Undergraduate research competition wiiner poster"}
          className={styles["image"]}
          onClick={(e) => {
            window.open(urlToOpen, "_blank");
          }}
        />
      </div>
    </Fade>
  );
};

const UCResearchAwardItem = () => {
  const urlToOpen = "https://youtu.be/pQSFTKTndXY?t=5757";
  return (
    <Container fluid style={styles}>
      <Row>
        <Col lg={7}>
          <Fade left duration={1000} distance={"50px"}>
            <div className={styles.content}>
              <h3 className={styles["award-title"]}>
                1st place winner at ADU Undergraduate Research Competiton
              </h3>
              <p className={styles["date"]}>11.02.2021</p>
              <p className={styles["award-description"]}>
                Secured first place at Abu Dhabi University's 8th
                <a href="https://www.adu.ac.ae/en/urc">
                  {" "}
                  Undegraduate Research Competition
                </a>{" "}
                in the IT & Computer Engineering category against multiple
                universities across the gulf region.(Reacher)
              </p>
              <div className={styles["mobile-image-wrapper"]}>
                {_renderImage(urlToOpen)}
              </div>

              <div className={styles["button-wrapper"]}>
                <HoverButton
                  title={"View Details"}
                  urlToOpen={urlToOpen}
                  color={primaryColor}
                  hoverBorderColor={primaryColor}
                  hoverColor={primaryColor}
                  icon={HoverButtonIconType.launch}
                />
              </div>
            </div>
          </Fade>
        </Col>
        <Col lg={5} className={styles["image-wrapper"]}>
          {_renderImage(urlToOpen)}
        </Col>
      </Row>
    </Container>
  );
};

export default UCResearchAwardItem;

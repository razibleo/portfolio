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
      <img
        src={Assets.EGA_COMPETITION}
        alt={"EGA 1st place winner"}
        className={styles["image"]}
        onClick={(e) => {
          window.open(urlToOpen, "_blank");
        }}
      />
    </Fade>
  );
};

const EgaAwardItem = () => {
  const urlToOpen =
    "https://www.ega.ae/en/media-releases/2020/march/al-robot-competition";
  return (
    <Container fluid style={styles}>
      <Row>
        <Col lg={5} className={styles["image-wrapper"]}>
          {_renderImage(urlToOpen)}
        </Col>
        <Col lg={7}>
          <Fade duration={1000} right distance={"50px"}>
            <div className={styles.content}>
              <h3 className={styles["award-title"]}>
                1st place in EGA student industrial robotics competition
              </h3>
              <p className={styles["award-description"]}>
                Won first place at Emirates Global Aluminium(EGA) 2nd
                <a href="https://www.ega.ae/en/media-releases/2021/september/al-robot">
                  {" "}
                  Industrial Robotics Competition
                </a>{" "}
                where we developed a robot that navigates around aluminium
                smelters using a CNN while recording thermal images. (Iron
                Mantis)
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
      </Row>
    </Container>
  );
};

export default EgaAwardItem;

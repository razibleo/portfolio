import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Assets from "../../../../utils/assets";
import styles from "../awarditems.module.css";
import HoverButton, {
  HoverButtonIconType,
} from "../../../../shared/components/buttons/hover_button/hoverbutton";
import { primaryColor } from "../../../../theme/colors";

const EgaAwardItem = () => {
  const urlToOpen =
    "https://www.ega.ae/en/media-releases/2020/march/al-robot-competition";
  return (
    <Container fluid style={styles}>
      <Row>
        <Col md={5}>
          <div className={"me-3"}>
            <img
              src={Assets.EGA_COMPETITION}
              className={styles["image"]}
              onClick={(e) => {
                window.open(urlToOpen, "_blank");
              }}
            />
          </div>
        </Col>
        <Col md={7}>
          <h3 className={styles["award-title"]}>
            1st place in EGA student industrial robotics competition
          </h3>
          <p>
            Won first place at Emirates Global Aluminium(EGA) 2nd
            <a href="https://www.ega.ae/en/media-releases/2021/september/al-robot">
              {" "}
              Industrial Robotics Competition
            </a>{" "}
            where we developed a robot that navigates around aluminium smelters
            using a CNN while recording thermal images. (Iron Mantis)
          </p>

          <HoverButton
            title={"View Details"}
            urlToOpen={urlToOpen}
            color={primaryColor}
            hoverBorderColor={primaryColor}
            hoverColor={primaryColor}
            icon={HoverButtonIconType.launch}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EgaAwardItem;
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Assets from "../../../../utils/assets";
import styles from "../awarditems.module.css";
import HoverButton, {
  HoverButtonIconType,
} from "../../../../shared/components/buttons/hover_button/hoverbutton";
import { primaryColor } from "../../../../theme/colors";

const UCResearchAwardItem = () => {
  const urlToOpen = "https://youtu.be/pQSFTKTndXY?t=5757";
  return (
    <Container fluid style={styles}>
      <Row>
        <Col md={7}>
          <h3 className={styles["award-title"]}>
            1st place winner at ADU Undergraduate Research Competiton
          </h3>
          <p className={styles["date"]}>11.02.2021</p>
          <p>
            Secured first place at Abu Dhabi University's 8th
            <a href="https://www.adu.ac.ae/en/urc">
              {" "}
              Undegraduate Research Competition
            </a>{" "}
            in the IT & Computer Engineering category against multiple
            universities across the gulf region.(Reacher)
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
        <Col md={5}>
          <div className={"ms-3"}>
            <img
              src={Assets.UC_RESEARCH}
              className={styles["image"]}
              onClick={(e) => {
                window.open(urlToOpen, "_blank");
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UCResearchAwardItem;

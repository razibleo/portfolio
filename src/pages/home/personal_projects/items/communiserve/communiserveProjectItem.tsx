import SectionHeader from "../../../../../shared/components/sectionheader/sectionheader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.scss";

const CommuniserveProjectItem = () => {
  return (
    <Container fluid className={styles["projectitem-wrapper"]}>
      <Row>
        <Col
          md={7}
          className={styles["project-image-section"]}
          style={{ paddingTop: "2em" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              position: "relative",
            }}
            className="me-3"
          >
            <img
              src={Assets.COUMMUNISERVE_HOME}
              style={{ width: "33%", position: "relative", zIndex: 10 }}
            />
            <img
              src={Assets.COUMMUNISERVE_MAPS}
              style={{
                width: "33%",
                position: "absolute",
                top: "15%",
                right: "20%",
              }}
            />
          </div>
        </Col>

        <Col md={5}>
          <h2 className={styles["project-title"]}>Community Service App</h2>
          <p className={styles["project-description"]}>
            A hybrid mobile-app for nearby community members to help each other
            get groceries during COVID-19.
          </p>
          <div className={styles["techstackssectiom"]}>
            <h5 className={styles["techstackusedtext"]}>
              What's under the hood?
            </h5>
            <HoverListItem title={"Ionic"} iconPath={Assets.IONIC_LOGO} />
            <HoverListItem title={"Angular"} iconPath={Assets.ANGULAR_LOGO} />
            <HoverListItem
              title={"Typescript"}
              iconPath={Assets.TYPSCRIPT_LOGO}
            />
            <HoverListItem
              title={"Firebase"}
              iconPath={Assets.FIREBASE_LOGO}
              saturation={90}
            />
            <HoverListItem
              title={"Google Maps"}
              saturation={96}
              iconPath={Assets.Google_MAPS_LOGO}
            />
            <HoverListItem
              title={"Push Notifications"}
              iconPath={Assets.PUSH_NOTIFICATIONS_LOGO}
            />
          </div>

          <div className={styles["project-resource-btn"]}>
            <HoverButton
              title={"</> Source Code"}
              urlToOpen={"https://github.com/razibleo/communiserve_app"}
            />
            <RaisedButton
              title={"Demo"}
              hoverBorderColor={"transparent"}
              borderColor={"transparent"}
              hoverShadowColor={"transparent"}
              urlToOpen={
                "https://drive.google.com/u/0/uc?id=1EO4a3ETphU6TsXC3ApqUj0ZubHNS4ZSL&export=download"
              }
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommuniserveProjectItem;

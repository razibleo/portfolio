import { FC } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import "./projects.css";
import ButtonTest from "../../../shared/components/buttons/buttonstest";
import { primaryColor } from "../../../theme/colors";
import HoverButton from "../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../shared/components/buttons/raised_button/raisedbutton";
import HoverListItem from "../../../shared/components/buttons/hover_list_item/hoverlistitem";
const Projects: FC = () => {
  return (
    <div className="projects-wrapper">
      <SectionHeader title={"Projects"} />
      <Container fluid className="project-content">
        <Row>
          <Col md={5}>
            <h2 className="project-title">Tic Tac Toe</h2>
            <p className="project-description">
              A native andoid Tic Tac Toe game with multiplayer functionaly via
              bluetooth created using Java.
            </p>
            <h5 className={"techstackusedtext"}>What's under the hood?</h5>

            <HoverListItem title={"Java"} />
            <HoverListItem title={"Laravel"} />
            <HoverListItem title={"Node.js"} />
            <HoverListItem title={"Android SDK"} />
            <HoverListItem title={"Push Notification"} />
            <HoverListItem title={"Amazon Web Services"} />
          </Col>
          <Col md={7} className={"project-image-section"}>
            <img
              src="https://raw.githubusercontent.com/razibleo/AndoridTicTacToe/master/screenshots/homeScreen.png"
              className="project-image"
            />
            <img
              src="https://raw.githubusercontent.com/razibleo/AndoridTicTacToe/master/screenshots/gameplay2.png"
              className="project-image"
            />

            <div className="project-resource-btn">
              <HoverButton title={"</> Source Code"} />
              <RaisedButton
                title={"Demo"}
                hoverBorderColor={"transparent"}
                borderColor={"transparent"}
                hoverShadowColor={"transparent"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Projects;

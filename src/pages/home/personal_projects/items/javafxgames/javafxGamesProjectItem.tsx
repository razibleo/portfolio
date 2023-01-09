import SectionHeader from "../../../../../shared/components/sectionheader/sectionheader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HoverListItem from "../../../../../shared/components/buttons/hover_list_item/hoverlistitem";
import HoverButton from "../../../../../shared/components/buttons/hover_button/hoverbutton";
import RaisedButton from "../../../../../shared/components/buttons/raised_button/raisedbutton";
import Assets from "../../../../../utils/assets";
import styles from "../../projectitem.module.scss";
import { primaryColor } from "../../../../../theme/colors";

const JavaFXGamesProjectItem = () => {
  return <div></div>;
  // return (
  //   <Container fluid className={styles["projectitem-wrapper"]}>
  //     <Row>
  //       <Col md={5}>
  //         <h2 className={styles["project-title"]}>Frogger & Space Invaders</h2>
  //         <p className={styles["project-description"]}>
  //           Simplified versions of classical games created using JavaFX.
  //         </p>
  //         <div className={styles["techstackssectiom"]}>
  //           <h5 className={styles["techstackusedtext"]}>
  //             What's under the hood?
  //           </h5>
  //           <HoverListItem title={"Java"} iconPath={Assets.JAVA_LOGO} />
  //           <HoverListItem title={"Java FX"} iconPath={Assets.JAVAFX_LOGO} />
  //         </div>

  //         <div className={styles["project-resource-btn"]}>
  //           <div>
  //             <p style={{ fontSize: "13px", padding: "0 5%", margin: 0 }}>
  //               Frogger:
  //             </p>
  //             <HoverButton
  //               title={"</> Source Code"}
  //               urlToOpen={"https://github.com/razibleo/javafxfrogger"}
  //             />
  //           </div>
  //           <div>
  //             <div>
  //               <p style={{ fontSize: "13px", padding: "0 5%", margin: 0 }}>
  //                 Space Invaders:
  //               </p>
  //               <HoverButton
  //                 title={"</> Source Code"}
  //                 urlToOpen={"https://github.com/razibleo/javafxspaceinvaders"}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </Col>
  //       <Col md={7} style={{ paddingTop: "4em" }}>
  //         <div className={"ms-3"} style={{ position: "relative" }}>
  //           <img
  //             src={Assets.SPACEINVADERS_GIF}
  //             width="25%"
  //             className="me-3"
  //             style={{
  //               display: "inline-block",
  //               zIndex: "20",
  //               position: "relative",
  //               /* offset-x | offset-y | blur-radius | spread-radius | color */
  //               boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  //               border: `2px solid red`,
  //             }}
  //           />

  //           <img
  //             src={Assets.FROGGER_GIF}
  //             className="me-3"
  //             style={{
  //               position: "absolute",
  //               top: "50%",
  //               left: "20%",
  //               width: "45%",
  //               zIndex: "0",
  //               border: `3px solid blue`,

  //               boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  //             }}
  //           />
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default JavaFXGamesProjectItem;

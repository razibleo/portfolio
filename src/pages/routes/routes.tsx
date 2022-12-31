import { Route, Routes, useLocation } from "react-router-dom";
import { FC } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PreloadImagePage from "../preloadimage/preloadimage";
import Home from "../home/home";
import styles from "./routes.module.scss";
const MainRoutes: FC = () => {
  const location = useLocation();
  // console.log("location", location.pathname);
  return (
    <div className={styles["wrapper"]}>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={5000}
          classNames={{
            // appear: 'my-appear',
            // appearActive: 'my-active-appear',
            // appearDone: 'my-done-appear',
            enter: styles["fade-enter"],
            enterActive: styles["fade-enter-active"],
            // enterDone: "my-done-enter",
            exit: styles["fade-exit"],
            exitActive: styles["fade-exit-active"],
            // exitDone: "my-done-exit",
          }}
        >
          <Routes location={location.pathname}>
            <Route path="/" element={<PreloadImagePage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default MainRoutes;

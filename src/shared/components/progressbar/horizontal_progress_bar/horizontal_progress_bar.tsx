import { FC, useEffect, useRef, useState } from "react";
import styles from "./horizontal_progress_bar.module.scss";
import useContainerDimensions from "../../../hooks/useContainerDimensions";

const HorizontalProgressBar: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ref = useRef(null);

  const dimensions = useContainerDimensions(ref);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 400);
  }, []);
  return (
    <div className={styles["progress-background"]} ref={ref}>
      <div
        className={styles["progress-bar"]}
        style={
          isVisible
            ? {
                transition: `${1}s width ease-in-out`,
                width: dimensions.width * (90 / 100),
              }
            : {
                width: 1,
              }
        }
      ></div>
    </div>
  );
};

export default HorizontalProgressBar;

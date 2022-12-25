import { FC, useRef } from "react";
import styles from "./horizontal_progress_bar.module.scss";
import useContainerDimensions from "../../../hooks/useContainerDimensions";
import TrackVisibility from "react-on-screen";

interface Props {
  percentageFill: number;
}

const HorizontalProgressBar: FC<Props> = (props: Props) => {
  const ref = useRef(null);

  const dimensions = useContainerDimensions(ref);

  return (
    <TrackVisibility once>
      {({ isVisible }) => {
        console.log("isvisible: ", isVisible);
        return (
          <div className={styles["progress-background"]} ref={ref}>
            <div
              className={styles["progress-bar"]}
              style={
                isVisible
                  ? {
                      transition: `${1}s width ease-in-out`,
                      width: dimensions.width * props.percentageFill,
                    }
                  : {
                      width: 1,
                    }
              }
            ></div>
          </div>
        );
      }}
    </TrackVisibility>
  );
};

export default HorizontalProgressBar;

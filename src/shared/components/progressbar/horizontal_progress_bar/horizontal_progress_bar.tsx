import { FC, useEffect, useRef, useState } from "react";
import styles from "./horizontal_progress_bar.module.scss";
import useContainerDimensions from "../../../hooks/useContainerDimensions";

interface Props {
  percentageFill: number;
}

const HorizontalProgressBar: FC<Props> = (props: Props) => {
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
                width: dimensions.width * props.percentageFill,
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

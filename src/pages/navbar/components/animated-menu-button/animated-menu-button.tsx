import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  isOpened: boolean;
  onPressed: VoidFunction;
}
const AnimatedMenuButton: FC<Props> = (props: Props) => {
  return (
    <button
      className={styles.wrapper + " " + (props.isOpened ? styles.open : "")}
      onClick={(e) => {
        e.preventDefault();
        props.onPressed();
      }}
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};

export default AnimatedMenuButton;

import styles from "./hoverbutton.module.css";
import { primaryColor } from "../../../../theme/colors";
interface Props {
  title: string;
  urlToOpen: string;
  borderColor?: string;
  borderRadius?: number;
  textColor?: string;
  color?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  animationDuration?: number;
}

const HoverButton = (props: Props) => {
  return (
    <div
      className={styles["button-wrapper"]}
      style={
        {
          "--color": props.color ?? "transparent",
          "--text-color": props.textColor ?? "white",
          "--border-color": props.textColor ?? "white",
          "--hover-color": props.color ?? "white",
          "--border-radius": props.borderRadius ?? 1000,
          "--hover-text-color": props.hoverTextColor ?? "black",
          "--hover-border-color": props.hoverBorderColor ?? "white",
          "--animation-duration": props.animationDuration ?? "0.4s",
        } as React.CSSProperties
      }
    >
      <button
        className={styles.button}
        onClick={(e) => {
          window.open(props.urlToOpen, "_blank");
        }}
      >
        <span className={styles.text}>{props.title}</span>
      </button>
    </div>
  );
};
export default HoverButton;

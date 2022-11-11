import {
  primaryBackgroundColor,
  primaryColor,
  secondaryBackgroundColor,
} from "../../../../theme/colors";
import styles from "./raisedbutton.module.css";
import LaunchIcon from "@mui/icons-material/Launch";
interface Props {
  title: string;
  urlToOpen: string;
  borderColor?: string;
  textColor?: string;
  color?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  hoverShadowColor?: string;
  animationDuration?: number;
}

const RaisedButton = (props: Props) => {
  return (
    <div
      className={styles["button-wrapper"]}
      style={
        {
          "--color": props.color ?? secondaryBackgroundColor,
          "--text-color": props.textColor ?? "white",
          "--border-color": props.borderColor ?? "white",
          "--hover-color": props.color ?? secondaryBackgroundColor,
          "--hover-text-color": props.hoverTextColor ?? primaryColor,
          "--hover-border-color": props.hoverBorderColor ?? primaryColor,
          "--hover-shadow-color": props.hoverShadowColor ?? primaryColor,
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
        <LaunchIcon /> <span className={styles.text}>{props.title}</span>
      </button>
    </div>
  );
};
export default RaisedButton;

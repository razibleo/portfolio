import styles from "./hoverbutton.module.css";
import { primaryColor } from "../../../../theme/colors";
import LaunchIcon from "@mui/icons-material/Launch";
import ArticleIcon from "@mui/icons-material/Article";

interface Props {
  title: string;
  showLaunchIcon?: boolean;
  showArticleIcon?: boolean;
  urlToOpen: string;
  borderColor?: string;
  borderRadius?: number;
  textColor?: string;
  color?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  fontSize?: number;
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
          "--border-color": props.borderColor ?? "white",
          "--hover-color": props.color ?? "white",
          "--border-radius": props.borderRadius ?? "1000em",
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
        {(props.showLaunchIcon ?? false) && (
          <LaunchIcon className={styles.text} style={{ paddingRight: "4px" }} />
        )}
        {(props.showArticleIcon ?? false) && (
          <ArticleIcon
            className={styles.text}
            style={{ paddingRight: "4px" }}
          />
        )}

        <span
          className={styles.text}
          style={{
            fontSize: props.fontSize,
            whiteSpace: "nowrap",
          }}
        >
          {props.title}
        </span>
      </button>
    </div>
  );
};
export default HoverButton;

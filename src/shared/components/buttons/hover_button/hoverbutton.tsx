import styles from "./hoverbutton.module.css";
import { primaryColor } from "../../../../theme/colors";
import LaunchIcon from "@mui/icons-material/Launch";
import ArticleIcon from "@mui/icons-material/Article";

export enum HoverButtonIconType {
  launch,
  article,
}
interface Props {
  title: string;
  icon?: HoverButtonIconType;
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
  padding?: string;
  width?: string;
  iconWidth?: number;
  iconMargin?: string;
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
          "--hover-color": props.hoverColor ?? "white",
          "--border-radius": props.borderRadius ?? "1000em",
          "--hover-text-color": props.hoverTextColor ?? "black",
          "--hover-border-color": props.hoverBorderColor ?? "white",
          "--animation-duration": props.animationDuration ?? "0.4s",
          "--padding": props.padding ?? "0.65em 2em",
          "--icon-margin": props.iconMargin ?? "4px",
          "--width": props.width,
          "--icon-width":
            props.iconWidth != null ? `${props.iconWidth}px` : null,
        } as React.CSSProperties
      }
    >
      <button
        className={styles.button}
        onClick={(e) => {
          window.open(props.urlToOpen, "_blank");
        }}
      >
        {props.icon === HoverButtonIconType.launch && (
          <LaunchIcon className={`${styles.text} ${styles.icon}`} />
        )}
        {props.icon === HoverButtonIconType.article && (
          <ArticleIcon className={`${styles.text} ${styles.icon}`} />
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

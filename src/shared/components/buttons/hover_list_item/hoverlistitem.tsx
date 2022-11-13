import styles from "./hoverlistitem.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface Props {
  title: string;
  offset?: number;
  borderColor?: string;
  textColor?: string;
  color?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  animationDuration?: number;
  iconPath?: string;
  iconPadding?: string;
  saturation?: number;
}

const HoverListItem = (props: Props) => {
  return (
    <div
      className={styles["button-wrapper"]}
      style={
        {
          "--color": props.color ?? "transparent",
          "--text-color": props.textColor ?? "white",
          "--border-color": props.textColor ?? "transparent",
          "--hover-color": props.color ?? "white",
          "--border-radius": 0,
          //   "--offset-left": `${props.offset ?? 0.1}em`,
          //   "--offset-right": `${props.offset ?? 1.5}em`,
          "--hover-text-color": props.hoverTextColor ?? "black",
          "--hover-border-color": props.hoverBorderColor ?? "transparent",
          "--animation-duration": props.animationDuration ?? "0.4s",
          "--force-icon-color":
            props.saturation != null ? `${props.saturation}%` : "100%",
        } as React.CSSProperties
      }
    >
      <span>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <span className={styles.text}>
            {" "}
            <KeyboardArrowRightIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            {props.title}
          </span>
        </button>
        {props.iconPath && (
          <img
            src={props.iconPath}
            className={styles.logo}
            style={{
              padding: props.iconPadding,
            }}
          />
        )}
      </span>
    </div>
  );
};
export default HoverListItem;

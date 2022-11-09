import styles from "./hoverlistitem.module.css";
import { primaryColor } from "../../../../theme/colors";
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
          "--offset": props.offset ?? 1,
          "--hover-text-color": props.hoverTextColor ?? "black",
          "--hover-border-color": props.hoverBorderColor ?? "transparent",
          "--animation-duration": props.animationDuration ?? "0.4s",
        } as React.CSSProperties
      }
    >
      <button className={styles.button}>
        <span className={styles.text}>
          {" "}
          <KeyboardArrowRightIcon
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
          {props.title}
        </span>
      </button>
    </div>
  );
};
export default HoverListItem;

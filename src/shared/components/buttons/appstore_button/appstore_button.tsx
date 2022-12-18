import styles from "./appstore_button.module.scss";
import GooglePlayIcon from "./google_play_Icon";
import AppleIcon from "./apple_icon";

export enum AppStoreButtonType {
  apple,
  googleplay,
}

interface Props {
  buttonType: AppStoreButtonType;
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

const AppStoreButton = (props: Props) => {
  const isApple = props.buttonType === AppStoreButtonType.apple;
  return (
    <div
      className={styles["button-wrapper"]}
      style={
        {
          "--color": props.color ?? "transparent",
          "--text-color": props.textColor ?? "white",
          "--border-color": props.borderColor ?? "white",
          "--hover-color": props.color ?? "white",
          "--border-radius": props.borderRadius ?? "1em",
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
        {isApple ? (
          <AppleIcon className={styles.logo} />
        ) : (
          <GooglePlayIcon className={styles.logo} />
        )}
        <span style={{ display: "inline-block", width: "14px" }} />

        <span
          className={styles.text}
          style={{
            fontSize: props.fontSize,
            whiteSpace: "nowrap",
          }}
        >
          <h5>{isApple ? "Download on the" : "GET IT ON"}</h5>
          <h4>{isApple ? "App Store" : "Google Play"}</h4>
        </span>
      </button>
    </div>
  );
};
export default AppStoreButton;

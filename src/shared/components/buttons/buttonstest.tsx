import "./buttonstest.css";
import { primaryColor } from "../../../theme/colors";
import { FC } from "react";
interface Props {
  color?: string;
  hoverColor?: string;
  title: string;
}
const ButtonTest: FC<Props> = ({ color, hoverColor, title }) => {
  return (
    <div className="buttons">
      <button className="fill">Fill In</button>
      <button className="pulse">Pulse</button>
      <button className="close">Close</button>
      <button className="raise">Raise</button>
      <button className="up">Fill Up</button>
      <button
        className="slide"
        style={
          {
            "--color": color ?? primaryColor,
            "--hover": hoverColor ?? primaryColor,
          } as React.CSSProperties
        }
      >
        {title}
      </button>
      {/* <button className="offset">Offset</button> */}
    </div>
  );
};
export default ButtonTest;

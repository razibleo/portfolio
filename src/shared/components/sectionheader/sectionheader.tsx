import "./sectionheader.css";
import Fade from "react-reveal/Fade";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <>
      <Fade left duration={1000} distance="70px">
        <h2 className="section-title">{title}</h2>
      </Fade>

      <Fade right duration={1000}>
        <div className="underline"></div>
      </Fade>
    </>
  );
};

export default SectionHeader;

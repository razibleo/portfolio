import "./sectionheader.css";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="underline"></div>
    </>
  );
};

export default SectionHeader;

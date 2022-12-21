import { FC } from "react";
import appversion from "../../../../package.json";
import styles from "./react_project_info.module.scss";
const ReactProjectInfo: FC = () => {
  return (
    <div className={styles.wrapper}>
      Portfolio v{appversion.version} alpha ({appversion.description})
    </div>
  );
};
export default ReactProjectInfo;

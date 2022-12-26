import { FC, useEffect } from "react";
import styles from "./preloadimage.module.scss";
import ClimbingStairsSpinner from "../../shared/components/spinners/climbing_stairs/climbing_stairs";
import { useNavigate } from "react-router-dom";
// import { sleep } from '../../utils/common_functions';
import cacheImages from "../../utils/cache_images";
import Assets from "../../utils/assets";
import { sleep } from "../../utils/common_functions";
import Typewriter from "typewriter-effect";
const PreloadImagePage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    cacheImages([
      ...Assets.getAllIntroAssets(),
      ...Assets.getAllProjectImages(),
    ]).then(async (_) => {
      await sleep(1000);
      navigate("home", { replace: true });
    });
  }, [navigate]);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles.spacer} />
      <ClimbingStairsSpinner />
      <div className={styles.spacer} />
      <h3>
        {"Please wait..."}
        <span style={{ display: "inline-block", width: 12 }}>
          <Typewriter
            options={{
              strings: [],
              autoStart: true,
              loop: false,
              cursor: "|",
              delay: 0,
            }}
          />
        </span>
      </h3>
    </div>
  );
};
export default PreloadImagePage;

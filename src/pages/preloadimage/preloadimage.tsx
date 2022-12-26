import { FC, useEffect } from "react";
import styles from "./preloadimage.module.scss";
import ClimbingStairsSpinner from "../../shared/components/spinners/climbing_stairs/climbing_stairs";
import { useNavigate } from "react-router-dom";
// import { sleep } from "../../utils/common_functions";
import cacheImages from "../../utils/cache_images";
import Assets from "../../utils/assets";
const PreloadImagePage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    cacheImages([
      ...Assets.getAllIntroAssets(),
      ...Assets.getAllProjectImages(),
    ]).then((_) => {
      navigate("main", { replace: true });
    });
  }, [navigate]);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles.spacer} />
      <ClimbingStairsSpinner />
      <div className={styles.spacer} />
      <h3>Please wait...</h3>
    </div>
  );
};
export default PreloadImagePage;

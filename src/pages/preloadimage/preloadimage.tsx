import { FC, useEffect, useState } from "react";
import styles from "./preloadimage.module.scss";
import ClimbingStairsSpinner from "../../shared/components/spinners/climbing_stairs/climbing_stairs";
import { useNavigate } from "react-router-dom";
// import { sleep } from '../../utils/common_functions';
import cacheImages from "../../utils/cache_images";
import Assets from "../../utils/assets";
import { sleep } from "../../utils/common_functions";
import Typewriter from "typewriter-effect";
import MainApi from "../../apis/mainapi";
import FutureStatus from "../../utils/FutureStatus";
import { ClientJS } from "clientjs";
const PreloadImagePage: FC = () => {
  const navigate = useNavigate();
  const [preoloadProgress, setPreloadProgress] = useState<number>(0);
  const [visitorDetailsStatus, setVisitorDetailsStatus] =
    useState<FutureStatus>(FutureStatus.initialized);
  const onChangedProgress = (progress: number) => {
    // console.log("progress", progress);
    setPreloadProgress(progress);
  };

  async function sendDetails() {
    const client = new ClientJS();

    const isDevMode = process.env.NODE_ENV === "development";
    if (isDevMode || visitorDetailsStatus !== FutureStatus.initialized) {
      return;
    }

    try {
      setVisitorDetailsStatus(FutureStatus.loading);
      const ipaddress = await MainApi.getIpaddress();

      const metaData = `${client.getBrowser()} ${client.getCPU()} ${client.getOS()}:${client.getOSVersion()} ${client.getDevice()} ${client.getDeviceType()}`;
      await MainApi.sendVisitorInfo(
        client.getFingerprint(),
        ipaddress,
        metaData
      );
      setVisitorDetailsStatus(FutureStatus.success);
    } catch (e) {
      setVisitorDetailsStatus(FutureStatus.failure);
    }
  }

  useEffect(() => {
    // console.log("again");
    const startTime = new Date();
    sendDetails();

    const projectImageUrls = Assets.getAllProjectImages();
    cacheImages(
      [
        ...Assets.getAllIntroAssets(),
        ...projectImageUrls.slice(0, Math.ceil(projectImageUrls.length / 1.8)),
      ],
      onChangedProgress
    ).then(async (_) => {
      const endTime = new Date();

      const timeTakenInSeconds =
        (endTime.getTime() - startTime.getTime()) / 1000;
      // console.log("time diff", timeTakenInSeconds);
      setPreloadProgress(1);

      await sleep(Math.max(400 - timeTakenInSeconds, 0));

      navigate("home", { replace: true });
    });
  }, [navigate]);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles.spacer} />
      <ClimbingStairsSpinner />
      <div className={styles.spacer} />
      <h3>{(preoloadProgress * 100).toFixed(0)}%</h3>
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

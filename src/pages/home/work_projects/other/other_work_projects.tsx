import { FC } from "react";
import styles from "./other_work_projects.module.scss";
import Assets from "../../../../utils/assets";
import AppleIcon from "../../../../shared/components/buttons/appstore_button/apple_icon";
import GooglePlayIcon from "../../../../shared/components/buttons/appstore_button/google_play_Icon";

const OtherWorkProjects: FC = () => {
  const list = [null, null, null, null, null, null];
  return (
    <>
      <h3 className={styles["title"]}>Other Projects I've contributed</h3>

      <div className={styles["grid-view"]}>
        {list.map((e) => {
          return (
            <div className={styles["grid-item"]}>
              <div className={styles.summary}>
                <div className={styles["image-wrapper"]}>
                  <img
                    className={styles["project-image"]}
                    src={Assets.KHAYMATZAMAN_SCREENSHOT}
                  />
                </div>

                <h5 className={styles.title}>Khyamat Zaman</h5>
              </div>
              <div className={styles.details}>
                <div className={styles.content}>
                  <h5 className={styles.title}>Khyamat Zaman</h5>
                  <p className={styles.description}>
                    A fully featured e-commerce application where products are
                    sold and categorized by shops.
                  </p>
                  <div className={styles["availableon-section"]}>
                    <img className={styles.logo} src={Assets.KMZ_LOGO} />
                    <div>
                      <h6>Available on:</h6>
                      <div className={styles["store-wrapper"]}>
                        <GooglePlayIcon className={styles["store-icon"]} />
                        <AppleIcon className={styles["store-icon"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OtherWorkProjects;

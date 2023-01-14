import Coins from "../Coins";
import Coursels from "./Coursels";
import styles from "./Banner.module.scss";

const BannerPage = () => {
  return (
    <div className={styles.bannerMain}>
      <div className={styles.headerbgimage}>
        <div
          className="d-flex flex-column pt-4 justify-content-around"
          style={{
            height: 400,
          }}
        >
          <div className="d-flex h-4 flex-column justify-content-center text-center">
            <p className="mb-2 text-light fw-bold fs-1 text-Montserrat">
              Crypto Hunter
            </p>
            <p className="text-secondary text-capitalize text-Montserrat">
              Get All the Info Regarding your Favorite Crypto Currency
            </p>
          </div>
          <Coursels />
        </div>
      </div>
      <Coins />
    </div>
  );
};

export default BannerPage;

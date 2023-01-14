import React, { useEffect } from "react";
import { SingleCoin } from "../../config/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoinInfo from "./CoinInfo";
import styles from "./CoinInfo.module.scss";

const Coin = () => {
  const [coinDetails, setCoinsDetails] = React.useState<any>();
  const params = useParams();

  useEffect(() => {
    fetchCoinDetails();
  });

  const fetchCoinDetails = async () => {
    const { data } = await axios.get(SingleCoin(params.id));
    setCoinsDetails(data);
  };

  function numberWithCommas(x: any) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={`text-light ${styles.CoinInfo} mt-4`}>
      <div className={`${styles.coinInfoLeft}`}>
        <div className="d-flex justify-content-center flex-column align-items-center mx-4 mt-4">
          <img
            src={coinDetails?.image.large}
            width="200px"
            alt={coinDetails?.image?.large}
          />
          <h1>{coinDetails?.name}</h1>
        </div>
        <div className="p-4">
          <div
            className="w-100 text-justify font-Montserrat pt-0 pb-4"
            dangerouslySetInnerHTML={{
              __html: coinDetails?.description.en.split(". ")[0],
            }}
          />
          <div className="d-flex flex-column">
            <h3 className="pt-2">Rank: {coinDetails?.coingecko_rank}</h3>
            <h3 className="pt-2">
              Current Price: {"₹"}{" "}
              {numberWithCommas(coinDetails?.market_data.current_price["inr"])}
            </h3>
            <h3 className="pt-2">
              Market Cap: {"₹"}{" "}
              {numberWithCommas(
                coinDetails?.market_data.market_cap["inr"]
                  ?.toString()
                  .slice(0, -6)
              )}
              M
            </h3>
          </div>
        </div>
      </div>
      {window.innerWidth > 900 && (
        <div className={`bg-light ${styles.border}`} />
      )}
      <div
        className={`d-flex p-4 mt-4 align-items-center flex-column justify-content-center ${styles.coinGraph}`}
      >
        {coinDetails && <CoinInfo />}
      </div>
    </div>
  );
};

export default Coin;

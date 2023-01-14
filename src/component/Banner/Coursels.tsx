import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { Link } from "react-router-dom";

const Coursels = () => {
  const [TreadingCoins, setTreadingCoins] = useState<any>();

  useEffect(() => {
    fetchTreadingCoins();
  }, []);

  const fetchTreadingCoins = async () => {
    const { data } = await axios.get(TrendingCoins("INR"));
    console.log(data);
    setTreadingCoins(data);
  };

  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const items = TreadingCoins?.map((coin: any) => {
    let profit: any = coin?.price_change_percentage_24h >= 0;

    return (
      <Link
        className="d-flex flex-column align-items-center text-uppercase text-light text-decoration-none"
        to={`/coin/${coin.id}`}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          ₹ {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="h-50 d-flex justify-content-center flex-row">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Coursels;

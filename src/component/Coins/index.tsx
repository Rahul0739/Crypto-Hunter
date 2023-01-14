import axios from "axios";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { CoinList } from "../../config/api";
import { useNavigate } from "react-router-dom";
import styles from "./Coins.module.scss";

const Coins = () => {
  const [Coins, setCoins] = useState<any>();
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);
  const navigate = useNavigate();

  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  React.useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList("INR"));
    setCoins(data);
  };

  const handleSearch = () => {
    return Coins?.filter(
      (coin: any) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleOnClick = (data: any) => {
    navigate(`/coin/${data.id}`);
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <div className={styles.coinstable}>
        <p className="d-flex justify-content-center fs-2">
          Cryptocurrency Prices by Market Cap
        </p>
        <input
          className="w-100 text-light p-3 mb-4 border border-secondary rounded-top rounded-bottom"
          style={{
            background: "rgb(38, 37, 37)",
          }}
          onChange={(e) => setSearch(e.target.value)}
          type={"text"}
          placeholder="Search For a Crypto Currency.."
        />
        <div>
          <div>
            <Table>
              <thead
                className="rounded-top rounded-bottom text-top"
                style={{ height: "50px" }}
              >
                <tr className="bg-warning">
                  <th>Coin</th>
                  <th>Price</th>
                  <th>24th Change</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody className="text-light">
                {handleSearch()?.map((coin: any) => {
                  return (
                    <tr
                      onClick={() => handleOnClick(coin)}
                      className="text-center"
                      style={{ cursor: "pointer" }}
                    >
                      <td className="pt-4 pb-4">
                        <div className="d-flex">
                          <img
                            className="me-3"
                            src={coin.image}
                            alt={coin?.image}
                            width="45px"
                            height="45px"
                          />
                          <div className="text-start">
                            <h5 className="m-0">{coin.symbol.toUpperCase()}</h5>
                            <p className="m-0">{coin.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="pt-4">
                        {"₹ "} {numberWithCommas(coin.current_price.toFixed(2))}
                      </td>
                      <td className="pt-4">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="pt-4">
                        {"₹"}{" "}
                        {numberWithCommas(
                          coin.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {/* <Pagination
              count={(handleSearch()?.length / 10).toFixed(0)}
              style={{
                padding: 20,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              //   classes={{ ul: classes.pagination }}
              onChange={(_: any, value: any) => {
                setPage(value);
                window.scroll(0, 450);
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;

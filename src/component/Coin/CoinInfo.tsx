import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../config/api";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useParams } from "react-router-dom";
import { chartDays } from "../../config/data";
import SelectButton from "./SelectButton";

const CoinInfo = () => {
  const [historicData, setHistoricData] = useState<any>();
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);
  const params = useParams();
  Chart.register(CategoryScale);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(params?.id, days, "INR"));
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  });

  return (
    <>
      {!historicData || flag === false ? (
        <div style={{ color: "white" }}>Loading ...!</div>
      ) : (
        <>
          <Line
            data={{
              labels: historicData?.map((coin: any) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;

                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData?.map((coin: any) => coin[1]),
                  label: `Price ( Past ${days} Days ) in Rs`,
                  borderColor: "#EEBC1D",
                  backgroundColor: "rgb(255, 99, 132)",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div className="d-flex mt-4 justify-content-around w-100 flex-wrap">
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CoinInfo;

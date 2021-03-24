import React, { useState } from "react";
import SecureAxios from "../config/SecureAxios";

import { Line } from "react-chartjs-2";
export default function Analytics(props) {
  const [pulledData, setPulledData] = useState({});

  const getData = () => {
    SecureAxios({
      method: "GET",
      url: "QueriesAPI/getAnalytics/",
      data: {
        start: "2021,03,16",
        end: "2021,03,18",
      },
    })
      .then((res) => setPulledData(res.data))
      .catch((e) => console.log(e));

    console.log(pulledData);
  };

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Contact us Analytics",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(0, 74, 94)",
        borderColor: "rgba(	0, 135, 170, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            getData();
          }}
        >
          Get Data
        </button>
      </div>
      <div style={{ width: "70%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

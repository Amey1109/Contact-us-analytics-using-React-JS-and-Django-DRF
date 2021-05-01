import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import SecureAxios from "../config/SecureAxios";

export default function Analytics(props) {
  const [pulledData, setPulledData] = useState([]);

  const [inputStartDate, setInputStartDate] = useState("");
  const [inputEndDate, setInputEndDate] = useState("");

  let startDate = inputStartDate;
  let endDate = inputEndDate;

  let analyzedDate = pulledData.map((item) => {
    return item.date;
  });

  let analyzedCount = pulledData.map((item) => {
    return item.Count;
  });

  const getData = () => {
    SecureAxios({
      method: "POST",
      url: "QueriesAPI/getAnalytics/",
      data: {
        start_date: startDate,
        end_date: endDate,
      },
    })
      .then((res) => setPulledData(res.data))
      .catch((e) => console.log(e));
  };

  const data = {
    labels: analyzedDate,
    datasets: [
      {
        label: "Contact us Analytics",
        data: analyzedCount,
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
      <div style={{ marginLeft: "7%" }}>
        <input
          type="date"
          onChange={(e) => {
            setInputStartDate(e.target.value);
          }}
        />
        <label style={{ margin: "1%" }}> To </label>
        <input
          type="date"
          onChange={(e) => {
            getData();
            setInputEndDate(e.target.value);
          }}
        />
      </div>
      <div
        className="container"
        style={{
          width: "50%",
          height: "50%",
          marginLeft: "2%",
          margin: "5%",
          alignItems: "center",
        }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

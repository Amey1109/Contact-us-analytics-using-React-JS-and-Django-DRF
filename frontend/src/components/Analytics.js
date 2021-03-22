import React from "react";
import { Bar, Line } from "react-chartjs-2";
export default function Analytics(props) {
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
    <div style={{width:"70%"}}>
      <Line data={data} options={options} />
    </div>
  );
}

import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { records } from "../../data/Mockdata";

const edited = records.filter((record) => record.edited === true);
const notEdited = records.filter((record) => record.edited === false);
const missing = records.filter((record) => record.age === "");
console.log(missing.length);
const labels = [
  "Total Records",
  "Non-Edited Records",
  "Edited Records",
  "Missing Records",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      borderColor: "0",
      height: "100px",
      backgroundColor: [
        "rgb(0,0,255)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      data: [records.length, notEdited.length, edited.length, missing.length],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  ],
};

const Piechart = () => {
  return <Pie data={data} />;
};

export default Piechart;

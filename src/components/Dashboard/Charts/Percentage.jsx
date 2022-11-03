import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { records } from "../../data/Mockdata";
import checkPercentage from "../../data/Mockdata";

let percentageData = [checkPercentage(records), 100 - checkPercentage(records)];
const data = {
  labels: ["Edited Records", "Total Records"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["rgb(255, 99, 132)", "rgb(0,0,255)"],
      borderColor: "rgb(0,0,255)",
      data: percentageData,
    },
  ],
};

function Percentage() {
  return <Pie data={data} />;
}

export default Percentage;

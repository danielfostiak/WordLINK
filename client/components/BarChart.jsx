import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "All Scores",
    },
    legend: {
      display: false,
    },
  },
};

function BarChart({ scores }) {
  const highest = Math.max(...scores);

  const frequency = {};
  for (let i = 1; i <= highest; i++) {
    frequency[i.toString()] = 0;
  }
  scores.forEach((score) => {
    frequency[score.toString()]++;
  });
  console.log(frequency);
  const labels = Object.keys(frequency);
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        data: labels.map((score) => frequency[score]),
        backgroundColor: "#16a34a",
      },
    ],
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;

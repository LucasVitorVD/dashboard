import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import userData from "../../db/data"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    y: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
};

const BarChart = () => {
  const data = {
    labels: userData.map((data) => data.month),
    datasets: [
      {
        label: "Receitas",
        data: userData.map((data) => data.userGain),
        backgroundColor: "#9E6EFE",
        borderRadius: 5,
      },
    ],
  };
  
  return <Bar data={data} options={options} />;
};

export default BarChart;
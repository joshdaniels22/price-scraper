import './App.css';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Price of Lego',
    },
  },
};

const labels = ['25 Feb', '26 Feb', '27 Feb', '28 Feb'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Lego Car',
      data: [2299,2599,2199,2299],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};
function App() {
  return <div>
    <h1>Price Scraper</h1>
    <Bar options={options} data={data}/></div>
}

export default App;

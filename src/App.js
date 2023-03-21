import './App.css';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Price of LEGO® Technic App-Controlled Top Gear Rally Car',
    },
  },
};

const labels = ['25 Feb', '26 Feb', '27 Feb', '28 Feb'];

export const data = {
  labels,
  datasets: [
    {
      label: 'LEGO® Top Gear Rally Car',
      data: [2299,2599,2199,2299],
      backgroundColor: 'rrgb(2,40,73,1)',
      borderColor: 'rgb(32,120,209,1)',
    }
  ],
};
function App() {
  return <div>
    <header> <h1>Price Scraper</h1> </header>
    <Line options={options} data={data}/></div>
}

export default App;

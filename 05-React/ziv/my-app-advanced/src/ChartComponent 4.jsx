import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v8/finance/chart/AMZN', {
          params: {
            period1: 1721066400,
            period2: 1721239200,
            interval: '1m',
            includePrePost: true,
            events: 'div|split|earn',
            lang: 'en-US',
            region: 'US'
          }
        });
        console.log('API Response:', response.data);

        if (response.data.chart.result && response.data.chart.result[0]) {
          const data = response.data.chart.result[0];
          const timestamps = data.timestamp;
          const closePrices = data.indicators.quote[0].close;

          setChartData({
            labels: timestamps.map(ts => new Date(ts * 1000).toLocaleTimeString()),
            datasets: [
              {
                label: 'AMZN Stock Price',
                data: closePrices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
              }
            ]
          });
        } else {
          console.error('No data found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>AMZN Stock Price</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function StockGraph({ symbol }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?period1=1721066400&period2=1721239200&interval=1m&includePrePost=true&events=div|split|earn&&lang=en-US&region=US`
      );
      const data = await response.json();
      const prices = data.chart.result[0].indicators.quote[0].close;
      const timestamps = data.chart.result[0].timestamp.map(time => new Date(time * 1000).toLocaleTimeString());
      
      setChartData({
        labels: timestamps,
        datasets: [
          {
            label: `${symbol} Stock Price`,
            data: prices,
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
          },
        ],
      });
    };

    fetchData();
  }, [symbol]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return <Line data={chartData} />;
}

export default StockGraph;

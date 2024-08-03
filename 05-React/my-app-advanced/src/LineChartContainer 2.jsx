import React, { memo, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import amazonStockData from './amazon-stock-data';

function LineChartContainer() {
  const [chartData, setChartData] = useState([]);
  const [domainMinMax, setDomainMinMax] = useState([0,0]);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/AMZN?period1=1721066400&period2=1721239200&interval=1m&includePrePost=true&events=div%7Csplit%7Cearn&&lang=en-US&region=US");
      // const apiData = await res.json();
      const apiData = amazonStockData;
      const prices = apiData.chart.result[0].indicators.quote[0].close; // extracting the specific piece of data

      const min = Math.min(prices);
      const max = Math.max(prices);

      setDomainMinMax([min, max]);

      const newChartData = prices.map((price) => ( { price } ));
      setChartData(newChartData);
    };

    fetchData();
  }, []);

    return (
      <LineChart width={800} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis domain={domainMinMax} padding={{ top: 10, bottom: 10 }}  />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
}

export default memo(LineChartContainer);

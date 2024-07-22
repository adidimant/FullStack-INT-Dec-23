import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraphStock = () => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/AMZN?period1=1721066400&period2=1721239200&interval=1m&includePrePost=true&events=div%7Csplit%7Cearn&&lang=en-US&region=US');
            const data = await response.json();
            
            const stockData = data.chart.result[0].indicators.quote[0].close;
            const timestamps = data.chart.result[0].timestamp;
            
            const chartData = timestamps.map((timestamp, index) => ({
                timestamp: new Date(timestamp * 1000),
                price: stockData[index],
            }));
            
            return (
                <LineChart width={800} height={400} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            );
        } catch (error) {
            console.error('Error fetching stock data:', error);
            return null;
        }
    };

    return (
        <div>
            <h2>Stock Price Graph</h2>
            {fetchData()}
        </div>
    );

};

export default GraphStock;
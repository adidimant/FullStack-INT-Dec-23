import React from 'react';
import file from './fetchData/AMZN.json';
import { Chart } from 'react-google-charts';

function Graph({compny}){
    function getTimeFromTimestamp(ts) {
        const date = new Date(ts);
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    const timestamp = file.chart.result[0].timestamp;
    const time = timestamp.map((value)=> getTimeFromTimestamp(value));
    const open = file.chart.result[0].indicators.quote[0].open;
    const close = file.chart.result[0].indicators.quote[0].close;
    const low = file.chart.result[0].indicators.quote[0].low;
    const high = file.chart.result[0].indicators.quote[0].high;

    const data = [
        ['Time', 'open','close','low', 'high'],
    ];
    for(let i=0;i<time.length;i++){
        const newRow = [time[i],open[i],close[i],low[i],high[i]];
        data.push(newRow);
    }

    const options = {
        title: compny + ' graph',
        curveType: 'function',
        legend: { position: 'bottom' },
    };    
/*
            <div>{file.chart.result[0].timestamp.join(' ')}</div>
            <br />
            <div>{file.chart.result[0].indicators.quote[0].open.map(num => num.toFixed(3)).join(' ')}</div>

*/
    return(
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default Graph;
import fetchData from './GraphData'
import { line } from 'react-chartjs-2'

async function Graph(){
    const data = await fetchData();
    
    const timestamps = data.chart.result[0].timestamp;
    const prices = data.chart.result[0].indicators.quote[0].close;
}
import { memo, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Box from '../../../components/Box/Box';
import axios from 'axios';
import './DataGraph.css';
import YearSelector from './YearSelector';
import { axiosClient } from '../../../axiosClient';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const monthsInHebrew = [
  'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
  'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: 20 },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 14 }, color: '#333' },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1000,
        font: { size: 12 },
        color: '#333',
      },
      grid: {
        color: '#ddd',
        borderDash: [2, 2],
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'end',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        color: '#333',
        font: { size: 12 },
        boxWidth: 10,
      },
    },
  },
  locale: 'he',
  direction: 'rtl',
};

type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  barPercentage: number;
}

type ChartData = {
  labels: string[];
  datasets: Dataset[];
}

const fetchGraphData = async (year: string) => {
  try {
    const response = await axiosClient.get(
      `/api/receipts/monthly-summary/${year}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching graph data:', error);
    return [];
  }
};


function DataGraph() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });
  const [year, setYear] = useState<string>(new Date().getFullYear().toString());
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [annualExpenses, setAnnualExpenses] = useState<number>(0);

  useEffect(() => {
    const loadGraphData = async () => {
      const data = await fetchGraphData(year);
      const totalIncome = data.reduce((acc: number, curr: { income: number }) => acc + curr.income, 0);
      const totalExpenses = data.reduce((acc: number, curr: { expenses: number }) => acc + curr.expenses, 0);
      setAnnualIncome(totalIncome);
      setAnnualExpenses(totalExpenses);

      const labelsInHebrew = data.map((item: { month: string }) => {
        const monthIndex = new Date(`${item.month} 1, ${year}`).getMonth();
        return monthsInHebrew[monthIndex];
      });

      setChartData({
        labels: labelsInHebrew,
        datasets: [
          {
            label: 'הכנסות (₪)',
            data: data.map((item: { income: number }) => item.income),
            backgroundColor: '#D9A441',
            borderColor: '#B88530',
            borderWidth: 1,
            barPercentage: 0.6,
          },
          {
            label: 'הוצאות (₪)',
            data: data.map((item: { expenses: number }) => item.expenses),
            backgroundColor: 'rgba(0, 122, 153, 0.7)',
            borderColor: '#007a99',
            borderWidth: 1,
            barPercentage: 0.6,
          },
        ],
      });
    };
    loadGraphData();
  }, [year]);

  return (
    <>
      <Box width="1100px">
        <div className="top-data">
          <div>
            <YearSelector/>
          </div>
          <div className="vertical-line"></div>
          <div>
            <h2>{annualIncome} ₪</h2>
            <p>סכום הכנסות</p>
          </div>
          <div className="vertical-line"></div>
          <div>
            <h2>{annualExpenses} ₪</h2>
            <p>סכום הוצאות</p>
          </div>
        </div>
        <div className="transverse-line"></div>
        <div
          className="graph-box"
          style={{
            width: '600px',
            height: '400px',
            margin: '0 auto',
            direction: 'rtl',
            marginTop: '20px',
          }}
        >
          <div className="graph-box-top">
            <div>סך ההכנסות וההוצאות</div>
            <div>1/1/{year}-31/12/{year}</div>
          </div>
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </Box>
    </>
  );
}

export default memo(DataGraph);

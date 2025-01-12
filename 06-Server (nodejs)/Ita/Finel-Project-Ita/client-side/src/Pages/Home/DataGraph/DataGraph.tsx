import { memo, useEffect, useMemo, useState } from 'react';
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
import YearSelector from './YearSelector';
import { axiosClient } from '../../../axiosClient';
import './DataGraph.css';
import { extractUserIdFromToken } from '../../../utils';
import { useThemeContext } from '../../../context/theme-context';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const monthsInHebrew = [
  'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
  'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
];

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

const fetchGraphData = async (userId: string, year: string) => {
  try {
    const response = await axiosClient.get(
      `/api/receipts/monthly-summary/${userId}/${year}`
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
  const { theme } = useThemeContext()

  useEffect(() => {
    const loadGraphData = async () => {
      const userId = extractUserIdFromToken();
      const data = await fetchGraphData(userId, year);
      console.log('Received data:', data);

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

  const textColor = useMemo(() => theme === 'dark' ? '#e0e0e0' : '#333', [theme]);
  const borderColor = useMemo(() => theme === 'dark' ? '#555' : '#ddd', [theme]);


  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 20 },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 14 }, color: textColor },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
          font: { size: 12 },
          color: textColor,
        },
        grid: {
          color: borderColor,
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
          color: textColor,
          font: { size: 12 },
          boxWidth: 10,
        },
      },
    },
    locale: 'he',
    direction: 'rtl',
  }), [textColor, borderColor]);


  return (
    <>
      <Box width="1100px">
        <div className="top-data" style={{ color: textColor }}>
          <div>
            <YearSelector value={year} onChange={setYear} />
          </div>
          <div className="vertical-line" style={{ backgroundColor: borderColor }}></div>
          <div>
            <h2>{annualIncome} ₪</h2>
            <p>סכום הכנסות</p>
          </div>
          <div className="vertical-line" style={{ backgroundColor: borderColor }}></div>
          <div>
            <h2>{annualExpenses} ₪</h2>
            <p>סכום הוצאות</p>
          </div>
        </div>
        <div className="transverse-line" style={{ backgroundColor: borderColor }}></div>
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
          <div className="graph-box-top" style={{ color: textColor }}>
            <div>סך ההכנסות וההוצאות</div>
            <div>1/1/{year}-31/12/{year}</div>
          </div>
          <Bar data={chartData} options={options} />
        </div>
      </Box>
    </>
  );
}

export default memo(DataGraph);

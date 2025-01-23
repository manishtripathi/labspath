import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export const TotalRevenue = () => {
  const barData = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Digital X-Ray',
        data: [4, 3, 2, 3, 2],
        backgroundColor: '#6B21A8',
      },
      {
        label: 'Blood Test',
        data: [2, 3, 4, 2, 3],
        backgroundColor: '#FACC15',
      },
      {
        label: 'USG',
        data: [3, 2, 3, 4, 1],
        backgroundColor: '#3B82F6',
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Total Revenue</h2>
      <p className="text-2xl font-bold text-purple-700">$236,536</p>
      <div className="flex items-center space-x-4 mt-4">
        <span className="text-sm text-gray-600 cursor-pointer underline">Monthly</span>
        <span className="text-sm text-gray-600 cursor-pointer underline">Weekly</span>
        <span className="text-sm text-gray-600 cursor-pointer underline">Today</span>
      </div>
      <div className="mt-4">
        <Bar data={barData} />
      </div>
    </div>
  );
};
import { Pie } from "react-chartjs-2";
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

export const TotalCases = () => {
  const pieData = {
    labels: ['Blood Test', 'USG', 'Digital X-Ray'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#FACC15', '#3B82F6', '#6B21A8'],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      
      <div className="flex justify-between">
        <div className="total-cases">
          <h2 className="text-lg font-semibold text-gray-700">Total Cases</h2>
          <p className="text-2xl font-bold ">1236</p>
        </div>
        <div className="flex items-top space-x-4">
          <span className="text-sm text-gray-600 font-semibold cursor-pointer underline">Monthly</span>
          <span className="text-sm text-gray-600 font-semibold cursor-pointer ">Weekly</span>
          <span className="text-sm text-gray-600 font-semibold cursor-pointer ">Today</span>
        </div>
      </div>
      <div className="mt-4">
        <Pie data={pieData} />
      </div>
    </div>
  );
};
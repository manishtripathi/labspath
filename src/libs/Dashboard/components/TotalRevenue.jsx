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
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between ">
          <div className="total-revenue">
            <h2 className="text-lg font-semibold text-gray-700 ">Total Revenue</h2>
            <p className="text-2xl font-bold ">$236,536</p>
          </div>
          <div className="flex items-top space-x-4">
            <span className="text-sm text-gray-600 font-semibold cursor-pointer ">Monthly</span>
            <span className="text-sm text-gray-600 font-semibold cursor-pointer ">Weekly</span>
            <span className="text-sm text-gray-600 font-semibold cursor-pointer underline">Today</span>
          </div>
        </div>

        <div className="mt-4">
          <Bar data={barData} />
        </div>
      </div>
    </>
  );
};
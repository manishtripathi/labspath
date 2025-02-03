import React, { useEffect } from 'react';
import StatsCard from './components/StatsCard';
import Sidebar from './components/Sidebar';
import { TotalCases } from './components/TotalCases';
import { TotalRevenue } from './components/TotalRevenue';
import { VisitorList } from './components/VisitorList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCenters } from '../../redux/slices/doctorSlice';

const Dashboard = () => {

  const dispatch = useDispatch();
  const { allCenters } = useSelector(state => state.doctor)
  useEffect(()=>{
    if(allCenters?.length === 0 ){
      dispatch(getAllCenters());
    }
  },[dispatch])

  return (
    <div className="min-h-screen bg-purple-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 p-2 rounded-full cursor-pointer">🔍</div>
            <img
              src="https://via.placeholder.com/40"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            title="Total Income Dec 2024"
            value="$4,562"
            description="35 Test Records"
            gradient="bg-gradient-to-r from-yellow-400 to-purple-600 text-white"
          />
          <StatsCard
            title="Total Collection Charges Dec"
            value="$0.00"
          />
          <StatsCard
            title="Expenses In Dec"
            value="$0.00"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <TotalCases/>
          <TotalRevenue/>
        </section>

        <section>
            <VisitorList/>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
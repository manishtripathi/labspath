import React, { useEffect } from 'react';
import {StatsCard, StatsCard2} from './components/StatsCard';
import Sidebar from './components/Sidebar';
import { TotalCases } from './components/TotalCases';
import { TotalRevenue } from './components/TotalRevenue';
import { VisitorList } from './components/VisitorList';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllCenters } from '../../redux/slices/doctorSlice';
import { GiMicroscope } from "react-icons/gi";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { getAllAdmins, getAllCenters,getAlltest,getAlltestCategorylst, getdoctor } from '../../redux/slices/getDropdownoptionSlice';

const Dashboard = () => {

  const dispatch = useDispatch();
  const { allCenters,allTestCategory , allDoctor,alltest,allAdmins} = useSelector(state => state.dropDownOptions)
  useEffect(()=>{
    
    if(allCenters?.length === 0 ){
      dispatch(getAllCenters());
    }
    if(allTestCategory?.length === 0){
      dispatch(getAlltestCategorylst());
    }
    if(allDoctor?.length === 0 ){
      dispatch(getdoctor());
    }
    if(alltest?.length === 0 ){
      dispatch(getAlltest());
    }
    if(allAdmins?.length === 0 ){
      dispatch(getAllAdmins());
    }
  },[dispatch])

  return (
    <div className="min-h-screen bg-purple-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 main-container">
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

        <section className="flex justify-between items-center">
       
          <StatsCard
          Icon={GiMicroscope} 
            title="Total Income "
            years="Dec 2024"
            value="$4,562"
            description="35 Test Records"
            gradient="bg-gradient-r text-white "            
            className="w-2/5"
          />
          <StatsCard2
            value="$0.00"
            title="Total Collection Charges "
            years="Dec"
            className="w-3/12 custom-text-color"
            tooltip="This is the total charges of the dec"
            Icon={IoIosInformationCircleOutline }
            
          />
          <StatsCard2
            title="Expenses In"
            years="Dec"
            value="$0.00"
            className="w-3/12 custom-text-color"
            tooltip="This is the total expenses of the dec"
            Icon={IoIosInformationCircleOutline}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <TotalCases/>
          <TotalRevenue/>
        </section>

        <section className='mb-6 mt-6'>
            <VisitorList/>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
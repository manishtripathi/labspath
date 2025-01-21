import React from 'react'
import { useSelector } from 'react-redux';
import { selectDashboardData } from '../../redux/dashboardSlice';
import TotalCard from '../../Component/Totalcard/TotalCard';
import VisitorList from '../../Component/visitorlist/VisitorList';
import Chart from '../../Component/Chartjs/Chart';


const Dashboard = ()=> {
  const dashboardData = useSelector(selectDashboardData);
  return (
    <>
        <div className='dashbaord'>
          <h1> Dashbaord </h1>
          <p>Welcome to LabSmart</p>
          <div className="cards">
            <TotalCard title="Total Income Dec 2024" value={`$${dashboardData?.totalIncome}`} />
            <TotalCard title="Total Collection Charges Dec" value={`$${dashboardData?.totalCollectionCharges}`} />
            <TotalCard title="Expenses In Dec" value={`$${dashboardData?.expenses}`} />
          </div>

          <div className="charts">
            <div>
              <h3>Total Cases: {dashboardData.totalCases}</h3>
              <Chart data={dashboardData.revenue} type="pie" />
            </div>
            <div>
              <h3>Total Revenue</h3>
              <Chart data={dashboardData.revenue} type="bar" />
            </div>
          </div>
          <VisitorList visitors={dashboardData.visitorList} />
        </div>
    </>
  )
}

export default Dashboard
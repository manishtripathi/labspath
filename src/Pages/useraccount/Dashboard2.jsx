import React, { useState } from 'react';
import Modal from '../../Component/Modal/ModalPopUp';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* Sidebar */}
      <div className="flex">
        <Sidebar/>

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
            <div className="bg-gradient-to-r from-yellow-400 to-purple-600 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Income Dec 2024</h2>
              <p className="text-2xl font-bold mt-2">$4,562</p>
              <p className="text-sm">35 Test Records</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700">Total Collection Charges Dec</h2>
              <p className="text-2xl font-bold mt-2 text-purple-700">$0.00</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700">Expenses In Dec</h2>
              <p className="text-2xl font-bold mt-2 text-purple-700">$0.00</p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Total Cases</h2>
              <div className="flex justify-between">
                <p className="text-2xl font-bold text-purple-700">1236</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 cursor-pointer underline">Monthly</span>
                  <span className="text-sm text-gray-600 cursor-pointer underline">Weekly</span>
                  <span className="text-sm text-gray-600 cursor-pointer underline">Today</span>
                </div>
              </div>
              <div className="mt-4">
                {/* Pie Chart Placeholder */}
                <div className="w-32 h-32 bg-purple-200 rounded-full mx-auto"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Total Revenue</h2>
              <p className="text-2xl font-bold text-purple-700">$236,536</p>
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-sm text-gray-600 cursor-pointer underline">Monthly</span>
                <span className="text-sm text-gray-600 cursor-pointer underline">Weekly</span>
                <span className="text-sm text-gray-600 cursor-pointer underline">Today</span>
              </div>
              <div className="mt-4">
                {/* Bar Chart Placeholder */}
                <div className="w-full h-24 bg-purple-200"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;



export const Sidebar = () =>{
  const [activeMenu, setActiveMenu] = useState('');
  const [ addNewCase, setAddNewCase ] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  return (
    <div className="w-64 bg-gray-100 h-screen shadow-lg">
        <Modal isOpen={addNewCase} onClose={()=>setAddNewCase(false)} title={"Add new case"}>
            <p>Add new Case here</p>
        </Modal>
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Lab Smart Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-bold text-purple-700">Lab <span className="text-yellow-500">Smart</span></span>
        </div>
        <button 
            onClick={()=>setAddNewCase(true)}
        className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600">
          Add New Case
        </button>
      </div>

      <div className="mt-4">
        <MenuItem
          title="Dashboard"
          isActive={activeMenu === 'Dashboard'}
          toggleMenu={() => toggleMenu('Dashboard')}
        />
        <MenuItem
          title="Business"
          isActive={activeMenu === 'Business'}
          toggleMenu={() => toggleMenu('Business')}
          subMenu={[
            'Overview',
            'Reports',
            'Analytics',
          ]}
        />
        <MenuItem
          title="Cases"
          isActive={activeMenu === 'Cases'}
          toggleMenu={() => toggleMenu('Cases')}
          subMenu={[
            'Open Cases',
            'Closed Cases',
            'Archived Cases',
          ]}
        />
        <MenuItem
          title="Lab"
          isActive={activeMenu === 'Lab'}
          toggleMenu={() => toggleMenu('Lab')}
          subMenu={['Tests', 'Schedules', 'Technicians']}
        />
        <MenuItem
          title="USG"
          isActive={activeMenu === 'USG'}
          toggleMenu={() => toggleMenu('USG')}
          subMenu={['Reports', 'Diagnostics']}
        />
        <MenuItem
          title="Digital X-Ray"
          isActive={activeMenu === 'Digital X-Ray'}
          toggleMenu={() => toggleMenu('Digital X-Ray')}
          subMenu={['Images', 'Radiologists']}
        />
        <MenuItem
          title="Manage"
          isActive={activeMenu === 'Manage'}
          toggleMenu={() => toggleMenu('Manage')}
          subMenu={['Users', 'Settings', 'Permissions']}
        />
      </div>
    </div>
  );
};


const MenuItem = ({ title, isActive, toggleMenu, subMenu = [] }) => {
  return (
    <div>
      <button
        onClick={toggleMenu}
        className={`w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-200 ${
          isActive ? 'bg-gray-200 font-semibold' : ''
        }`}
      >
        <span>{title}</span>
        <span className="text-gray-500">{isActive ? '▼' : '▶'}</span>
      </button>
      {isActive && subMenu.length > 0 && (
        <div className="ml-8">
          {subMenu.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

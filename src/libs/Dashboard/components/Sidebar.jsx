import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Modal from '../../../Component/Modal/ModalPopUp';
import AddNewCaseModal from '../../../Component/Modal/AddNewCase/AddNewCase';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [addNewCase, setAddNewCase] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  return (
    <div className="w-64 bg-gray-100 h-screen shadow-lg">
      <AddNewCaseModal isOpen={addNewCase} onClose={() => setAddNewCase(false)} >
      </AddNewCaseModal>

      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Lab Smart Logo" className="w-8 h-8" />
          <span className="text-lg font-bold text-purple-700">
            Lab <span className="text-yellow-500">Smart</span>
          </span>
        </div>
        <button
          onClick={() => setAddNewCase(true)}
          className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600"
        >
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
          subMenu={['Overview', 'Reports', 'Analytics']}
        />
        <MenuItem
          title="Cases"
          isActive={activeMenu === 'Cases'}
          toggleMenu={() => toggleMenu('Cases')}
          subMenu={['Open Cases', 'Closed Cases', 'Archived Cases']}
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

export default Sidebar;

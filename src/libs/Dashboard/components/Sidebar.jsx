import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import Modal from '../../../Component/Modal/ModalPopUp';
import AddNewCaseModal from '../../../Component/Modal/AddNewCase/AddNewCase';
import { useSelector } from 'react-redux';
import { getFormModal } from '../../../Common';
import { AddAdminFields, AddDoctor, AddTest, AddTestCategory, CenterFields } from '../../../Component/formFields';
import FormModal from '../../../Component/Modal/FormModal';
import { handleAddcenter, handleAddDoctor, handleAddTestCategory } from '../../../Component/commonService';
import { useNavigate } from 'react-router-dom';
import { addTestCategory } from '../../services/doctor-action-api';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [addNewCase, setAddNewCase] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [activeFields, setActiveFields] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const {user,token} = useSelector((state)=>state.auth);
  const navigate= useNavigate();
  console.log(user);
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };
  const handleSubmit = (data) =>{
    // console.log(data);
    if(activeModal === "doctor"){
      handleAddDoctor(data, setDisplayModal,navigate,token);
    }else if(activeModal ==="center"){
      console.log(data)
      handleAddcenter(data,setDisplayModal,token)
    } else if (activeModal === "testCategory"){
      handleAddTestCategory(data, setDisplayModal, navigate)
    }
  }

  const handleFormModalSection = (param) =>{
    setDisplayModal(true);
    if(param === "doctor") {
      setActiveFields(AddDoctor());
      setActiveModal(param);
    } else if (param === "center"){
      setActiveFields(CenterFields());
      setActiveModal(param)
    } else if(param === "admin"){
      setActiveFields(AddAdminFields());
      setActiveModal(param);
    } else if (param === "testCategory"){
      setActiveFields(AddTestCategory());
      setActiveModal(param);
    } else if (param === "tests"){
      setActiveFields(AddTest());
      setActiveModal(param);
    }
  }


  const handleListSelect =(param)=>{
    navigate(`/list/${param}`)
  }

  return (
    <>
    {(displayModal && activeFields?.length>0) && <FormModal fields ={activeFields} onSubmit={handleSubmit} showModal = {displayModal} onClose = {()=>setDisplayModal(false)}/>}
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
          subMenu={[{label:'Overview', actions:{}}, {label:'Reports', actions:{}}, {label:'Analytics', actions:{}}]}
        />
        <MenuItem
          title="Cases"
          isActive={activeMenu === 'Cases'}
          toggleMenu={() => toggleMenu('Cases')}
          subMenu={[{label:'Open Cases', actions:{}}, {label:'Closed Cases', actions:{}}, {label:'Archived Cases', actions:{}}]}
        />
        <MenuItem
          title="Lab"
          isActive={activeMenu === 'Lab'}
          toggleMenu={() => toggleMenu('Lab')}
          subMenu={[
            {label:'Add Test Category', actions:()=>handleFormModalSection("testCategory")},
            {label:'Add Tests', actions:()=>handleFormModalSection("tests")},
            ]}
        />
        {/* <MenuItem
          title="USG"
          isActive={activeMenu === 'USG'}
          toggleMenu={() => toggleMenu('USG')}
          subMenu={['Reports', 'Diagnostics']}
        /> */}
        <MenuItem
          title="Digital X-Ray"
          isActive={activeMenu === 'Digital X-Ray'}
          toggleMenu={() => toggleMenu('Digital X-Ray')}
          subMenu={[
            {label:'Images', actions:{}},
            {label:'Radiologists', actions:{}}
            ]}
        />

        <MenuItem
          title="Manage"
          isActive={activeMenu === 'Manage'}
          toggleMenu={() => toggleMenu('Manage')}
          subMenu={[{label:'Add Doctor', actions:()=>handleFormModalSection("doctor")}, 
          {label:'All Doctor', actions:()=>handleListSelect("doctor")}, 
          {label:'Permissions', actions:{}}]}
        />
        
        {user?.role === "superadmin" && 
        <MenuItem
        title={"Super Admin"}
        isActive={activeMenu === "Super Admin"}
        toggleMenu={()=>toggleMenu("Super Admin")}
        subMenu={[
        {label:"Add Center", actions:()=>handleFormModalSection("center")}, 
        {label:"Add Admin", actions:()=>handleFormModalSection("admin")}, 
        {label:"All Centers", actions:()=>handleListSelect("center")} , 
        {label:"All Admin", actions:()=>handleListSelect("admin")}]}/>
        }
      </div>
    </div>
    </>
  );
};

export default Sidebar;

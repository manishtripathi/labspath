import React, { useState } from 'react';
import Select from 'react-select';
import ControlledInput from '../../../ControlledComponents/controlledInput';
import ControlledSelect from '../../../ControlledComponents/controlledSelect';
import { useSelector } from 'react-redux';
import Modal from '../../ModalPopUp';
import { AddDoctor } from '../../../formFields';
import { handleAddDoctor } from '../../../commonService';
import FormModal from '../../FormModal';

const CaseDetails = ({ formData, onInputChange, setFormData }) => {
  
  const { allCenters,allTestCategory , allDoctor,alltest,allAdmins} = useSelector(state => state.dropDownOptions) 



  const [referee, setReferee] = useState({title:"", name:"", email:"", mobileNo:"", degree:""});
  const [activeReferee, setActiveReferee] = useState(0);
  const [showModal,setShowModal] = useState(false)


  //   const handleAddNewReferee = () =>{
  //     const {title, name, email, mobileNo, degree} = referee
  //   setFormData((pre)=>{
  //     const updatedreferee = pre.referee?.length>0 ? pre.referee.push({title, name, degree, mobileNo, email}): [{title, name, degree, mobileNo, email}];
  //     return {...pre, referee:updatedreferee}
  //   })
  //   setShowModal(false);
  // }

  // const refereeInputChange =(param, value)=>{
  //   setReferee((pre)=>({...pre, [param]:value}))
  // }

  return (
    <section>
      <div className="flex justify-between">
        {/* <Modal isOpen={showModal} onClose={()=>setShowModal(false) } title={"Add New Referee"}>
          <div className='flex flex-wrap justify-around'>
          <ControlledSelect options={titleOptions} onChange={(e)=>refereeInputChange("title", e.value)} name="title" label={"title"} className='w-2/12' value={formData?.referee?.[activeReferee]?.title || referee?.title}/>
          <ControlledInput type='text' onChange={(e)=>refereeInputChange("name", e.target.value)} name="name" label={"Name"} className='md:w-4/12 w-full' value={formData?.referee?.[activeReferee]?.name || referee?.name}/>
          <ControlledInput type='text' onChange={(e)=>refereeInputChange("degree", e.target.value)} name="degree" label={"Degree"} className='md:w-4/12 w-full' value={formData?.referee?.[activeReferee]?.degree || referee?.degree}/>
          <ControlledInput type='text' onChange={(e)=>refereeInputChange("mobileNo", e.target.value)} name="mobileNo" label={"Mobile No"} className='md:w-4/12 w-full' value={formData?.referee?.[activeReferee]?.mobileNo || referee?.mobileNo}/>
          <ControlledInput type='text' onChange={(e)=>refereeInputChange("Email", e.target.value)} name="email" label={"Email"} className='md:w-4/12 w-full' value={formData?.referee?.[activeReferee]?.email || referee?.email}/>
          </div>
          <button className=" px-4 py-2 rounded-md bg-green-600 hover:bg-green-400 text-white min-w-max" onClick= {()=>handleAddNewReferee()}>Submit</button>
        </Modal> */}

<FormModal
          fields={AddDoctor()}
          onSubmit={(data)=>handleAddDoctor(data, setShowModal)}
          showModal={showModal}
          isOpen={showModal} 
          onClose={()=>setShowModal(false)}
        />
      <h3 className="text-lg font-medium text-gray-800 mb-4">Case Details</h3>
      <button className="bg-yellow-400 text-white px-4 py-1" onClick={()=>setShowModal(true)}>Add new Referee</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Referred By</label>
          <Select value={allDoctor?.find((doctor)=>doctor?._id === formData.referredBy)} options={allDoctor} onChange={(e) => onInputChange('referredBy', e.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Collection Center</label>
          <Select type="text" value={allCenters?.find((center)=>center?._id === formData.collectionCenter)} options={allCenters} onChange={(e) => onInputChange('collectionCenter', e.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Collected By</label>
          <ControlledInput type="text" value={formData.sampleCollectedBy} onChange={(e) => onInputChange('sampleCollectedBy', e.target.value)} />
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={formData.isOutsourceLab} onChange={(e) => onInputChange('isOutsourceLab', e.target.checked)} />
          <label className="ml-2 text-sm font-medium text-gray-600">Outsource Lab?</label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Recommended Tests</label>
          <Select isMulti options={alltest} onChange={(selected) => onInputChange('recommendedTests', selected.map(s => s.value))} />
        </div>
        
      </div>
    </section>
  );
};

export default CaseDetails;

import React, { useState } from 'react';
import Select from 'react-select';
import ControlledInput from '../../../ControlledComponents/controlledInput';
import ControlledSelect from '../../../ControlledComponents/controlledSelect';
import { useSelector } from 'react-redux';
import Modal from '../../ModalPopUp';

const CaseDetails = ({ formData, onInputChange,handleAddNewReferee }) => {
  
  const { allCenters,allTestCategory , allDoctor,alltest,allAdmins} = useSelector(state => state.dropDownOptions) 
  const testOptions = [
    { value: 'CBC', label: 'CBC' },
    { value: 'X-Ray', label: 'X-Ray' },
    { value: 'Blood Test', label: 'Blood Test' },
  ];
  const [showModal, setShowModal] = useState(false);
const titleOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Mrs', label: 'Mrs' },
  ];

  return (
    <section>
      <div className="flex justify-between">
        <Modal isOpen={showModal} onClose={()=>setShowModal(false) } title={"Add New Referee"}>
          <div className='flex flex-wrap justify-around'>
          <ControlledSelect options={titleOptions} onChange={onInputChange} name="title" label={"title"} className='w-2/12'/>
          <ControlledInput type='text' onChange={onInputChange} name="name" label={"Name"} className='md:w-4/12 w-full'/>
          <ControlledInput type='text' onChange={onInputChange} name="degree" label={"Degree"} className='md:w-4/12 w-full'/>
          <ControlledInput type='text' onChange={onInputChange} name="mobileNo" label={"Mobile No"} className='md:w-4/12 w-full'/>
          <ControlledInput type='text' onChange={onInputChange} name="email" label={"Email"} className='md:w-4/12 w-full'/>
          {/* <ControlledInput type='text' onChange={onInputChange} name="title" className='md:w-4/12 w-full'/> */}
          </div>
        </Modal>
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
          <ControlledInput type="text" value={formData.collectedBy} onChange={(e) => onInputChange('collectedBy', e.target.value)} />
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={formData.isOutsourceLab} onChange={(e) => onInputChange('isOutsourceLab', e.target.checked)} />
          <label className="ml-2 text-sm font-medium text-gray-600">Outsource Lab?</label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Recommended Tests</label>
          <Select isMulti options={alltest} onChange={(selected) => onInputChange('recommendedTest', selected.map(s => s.value))} />
        </div>
        
      </div>
    </section>
  );
};

export default CaseDetails;

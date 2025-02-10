import React from 'react';
import Select from 'react-select';
import ControlledInput from '../../../ControlledComponents/controlledInput';
import ControlledSelect from '../../../ControlledComponents/controlledSelect';
import { useSelector } from 'react-redux';

const CaseDetails = ({ formData, onInputChange }) => {
  
  const { allCenters,allTestCategory , allDoctor,alltest,allAdmins} = useSelector(state => state.dropDownOptions) 
  const testOptions = [
    { value: 'CBC', label: 'CBC' },
    { value: 'X-Ray', label: 'X-Ray' },
    { value: 'Blood Test', label: 'Blood Test' },
  ];


  return (
    <section>
      <h3 className="text-lg font-medium text-gray-800 mb-4">Case Details</h3>
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

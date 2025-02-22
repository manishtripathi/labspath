import React, { useState } from 'react';
import Select from 'react-select';
import ControlledInput from '../../../ControlledComponents/controlledInput';

const PatientDetails = ({ formData, onInputChange, }) => {
  const [checkFormData, setCheckFormData] = useState({ onlineReport: [] })

  const [showEmailField, setShowEmailField] = useState(false);
  const [showAadharField, setShowAadharField] = useState(false);

  const handleCheckboxChange = (value) => {
    setCheckFormData((prev) => {
      const isChecked = prev.onlineReport.includes(value);
      const updatedOnlineReport = isChecked
        ? prev.onlineReport.filter((item) => item !== value)
        : [...prev.onlineReport, value];
      if (value === "Email") setShowEmailField(!isChecked);
      if (value === "Address") setShowAadharField(!isChecked);

      return { ...prev, onlineReport: updatedOnlineReport };
    });
  };
  // const titleOptions = [
  //   { value: 'Mr', label: 'Mr' },
  //   { value: 'Ms', label: 'Ms' },
  //   { value: 'Mrs', label: 'Mrs' },
  // ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  const chekboxOnChange = (key, value) => {
    setCheckFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  // const handleCheckboxChange = (option) =>{
  //   setCheckFormData((prev)=> {
  //     const updatedReport = prev.onlineReport.includes(option) ? prev.onlineReport.filter((item)=> item !== option) : [...prev.onlineReport, option];

  //     return {...prev, onlineReport: updatedReport}

  //   })

  // }
  return (
    <section className="mb-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Patient Details</h3>
      <div className="flex flex-wrap gap-3">
        {/* <div className='custom-form-width25'>
          <label className="block text-sm font-medium text-gray-600">Title</label>
          <Select
            options={titleOptions}
            onChange={(selected) => onInputChange('title', selected.value)}
          />
        </div> */}
        <div className='custom-form-width50'>
          <label className="block text-sm font-medium text-gray-600">First Name</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.fname}
            onChange={(e, error) => onInputChange('fname', e.target.value)}
          />
        </div>
        <div className='custom-form-width50'>
          <label className="block text-sm font-medium text-gray-600">Last Name</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.lname}
            onChange={(e, error) => onInputChange('lname', e.target.value)}
          />
        </div>
        <div className='custom-form-width50'>
          <label className="block text-sm font-medium text-gray-600">Age</label>
          <ControlledInput
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.age}
            onChange={(e, error) => onInputChange('age', e.target.value)}
          />
        </div>
        <div className='custom-form-width50'>
          <label className="block text-sm font-medium text-gray-600">Gender</label>
          <Select
            options={genderOptions}
            onChange={(selected) => onInputChange('gender', selected.value)}
          />
        </div>
        <div className='custom-form-width50'>
          <label className="block text-sm font-medium text-gray-600">Mobile No.</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.mobile}
            onChange={(e, error) => onInputChange('mobile', e.target.value)}
          />
        </div>
        <div className='custom-form-width50'>
          <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
          <ControlledInput
            type="date"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.dob}
            onChange={(e, error) => onInputChange('dob', e.target.value)}
          />
        </div>
        <div className="custom-form-width50">
          <label className="block text-sm font-medium text-gray-600">
            Online Report
          </label>
          <div className="flex space-x-2 mt-4 gap-4">
            <label className="flex items-start space-x-2">
              <ControlledInput
                type="checkbox"
                checked={checkFormData.onlineReport.includes("Email")}
                onChange={() => handleCheckboxChange("Email")}
              />
              <span>Email</span>
            </label>

            <label className="flex items-start space-x-2">
              <ControlledInput
                type="checkbox"
                checked={checkFormData.onlineReport.includes("Address")}
                onChange={() => handleCheckboxChange("Address")}
              />
              <span>Address</span>
            </label>
          </div>
          
         </div>
         <div className="custom-form-width50"></div>
        
           {showEmailField && (
            <div className="custom-form-width50">
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <ControlledInput
               type="email" 
               placeholder="Enter Email"
               className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300" 
               value={formData.email}
               onChange={(e, error) => onInputChange('email', e.target.value)}
               />
            </div>
          )}
          {showAadharField && (
            <div className="custom-form-width50">
              <label className="block text-sm font-medium text-gray-600">
                Aadhaar Number
              </label>
              <ControlledInput type="Number" 
               placeholder="Enter Aadhaar Number"
               className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300" 
               value={formData.aadhar}
               onChange={(e, error) => onInputChange('aadhar', e.target.value)}
               />
            </div>
          )}
         </div>
       
    </section>
  );
};

export default PatientDetails;

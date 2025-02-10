import React from 'react';
import Select from 'react-select';
import ControlledInput from '../../../ControlledComponents/controlledInput';

const PatientDetails = ({ formData, onInputChange }) => {
  const titleOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Mrs', label: 'Mrs' },
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <section className="mb-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Patient Details</h3>
      <div className="flex flex-wrap gap-3">
        <div className='w-1/5'>
          <label className="block text-sm font-medium text-gray-600">Title</label>
          <Select
            options={titleOptions}
            onChange={(selected) => onInputChange('title', selected.value)}
          />
        </div>
        <div className='w-2/6'>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.name}
            onChange={(e,error) => onInputChange('name', e.target.value)}
          />
        </div>
        <div className='w-2/6'>
          <label className="block text-sm font-medium text-gray-600">Age</label>
          <ControlledInput
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.age}
            onChange={(e,error) => onInputChange('age', e.target.value)}
          />
        </div>
        <div className='w-2/6'>
          <label className="block text-sm font-medium text-gray-600">Gender</label>
          <Select
            options={genderOptions}
            onChange={(selected) => onInputChange('gender', selected.value)}
          />
        </div>
        <div className='w-2/6'>
          <label className="block text-sm font-medium text-gray-600">Mobile No.</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.mobile}
            onChange={(e,error) => onInputChange('mobile', e.target.value)}
          />
        </div>
        <div className='w-2/6'>
          <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
          <ControlledInput
            type="date"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.dob}
            onChange={(e,error) => onInputChange('dob', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Online Report</label>
          <div className="flex space-x-2">
            <label className="flex items-center space-x-1">
              <ControlledInput
                type="checkbox"
                checked={formData.onlineReport.includes('Email')}
                onChange={(e) =>
                  onInputChange(
                    'onlineReport',
                    e.target.checked
                      ? [...formData.onlineReport, 'Email']
                      : formData.onlineReport.filter((item) => item !== 'Email')
                  )
                }
              />
              <span>Email</span>
            </label>
            <label className="flex items-center space-x-1">
              <ControlledInput
                type="checkbox"
                checked={formData.onlineReport.includes('Address')}
                onChange={(e) =>
                  onInputChange(
                    'onlineReport',
                    e.target.checked
                      ? [...formData.onlineReport, 'Address']
                      : formData.onlineReport.filter((item) => item !== 'Address')
                  )
                }
              />
              <span>Address</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientDetails;

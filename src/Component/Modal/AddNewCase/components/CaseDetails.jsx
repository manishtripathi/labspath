import React from 'react';
import Select from 'react-select';
import ControlledInput from '../../../ControlledComponents/controlledInput';

const CaseDetails = ({ formData, onInputChange }) => {
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
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.referredBy}
            onChange={(e,error) => onInputChange('referredBy', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Collection Center</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.collectionCenter}
            onChange={(e,error) => onInputChange('collectionCenter', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Collected By</label>
          <ControlledInput
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.collectedBy}
            onChange={(e,error) => onInputChange('collectedBy', e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <ControlledInput
            type="checkbox"
            className="mr-2"
            checked={formData.isOutsourceLab}
            onChange={(e,error) => onInputChange('isOutsourceLab', e.target.checked)}
          />
          <label className="block text-sm font-medium text-gray-600">
            Is sample collected by outsource lab?
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Recommended Test</label>
          <Select
            options={testOptions}
            onChange={(selected) => onInputChange('recommendedTest', selected.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Paid</label>
          <ControlledInput
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.paid}
            onChange={(e,error) => onInputChange('paid', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Discount</label>
          <ControlledInput
            type="number"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300"
            value={formData.discount}
            onChange={(e,error) => onInputChange('discount', e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;

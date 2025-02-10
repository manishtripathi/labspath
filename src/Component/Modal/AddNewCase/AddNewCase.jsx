import React, { useState } from 'react';
import PatientDetails from './components/PatientDetails';
import CaseDetails from './components/CaseDetails';
import PaymentDetail from './components/PaymentDetail';

const AddNewCaseModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    age: '',
    gender: '',
    mobile: '',
    dob: '',
    email: '',
    aadhar: '',
    address: '',
    patientHistory: '',
    onlineReport: [],
    referredBy: '',
    collectionCenter: '',
    collectedBy: '',
    isOutsourceLab: false,
    recommendedTest: [],
    paid: '',
    discount: '',
    balance: '',
    mode: '',
    remark: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 overflow-y-scroll custom-height-popup">
        <header className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Add New Case</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </header>

        {/* Patient Details Section */}
        <PatientDetails formData={formData} onInputChange={handleInputChange} />

        {/* Case Details Section */}
        <CaseDetails formData={formData} onInputChange={handleInputChange} />

        <PaymentDetail formData = {formData} onInputChange =  {handleInputChange}/>

        {/* Footer Buttons */}
        <footer className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md mr-4" onClick={onClose}>
            Cancel
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md" onClick={handleSubmit}>
            Submit
          </button>
        </footer>
      </div>
    </div>
  ) : null;
};

export default AddNewCaseModal;

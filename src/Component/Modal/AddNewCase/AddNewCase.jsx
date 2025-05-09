import React, { useState } from 'react';
import PatientDetails from './components/PatientDetails';
import CaseDetails from './components/CaseDetails';
import PaymentDetail from './components/PaymentDetail';
import { handleAddCase } from '../../commonService';
import Accordian from '../../../libs/Dashboard/components/accordian';
import { useNavigate } from 'react-router-dom';

const AddNewCaseModal = ({ isOpen, onClose }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
    gender: '',
    mobile: '',
    dob: '',
    email: '',
    aadhar: '',
    address: '',
    patientHistory: '',
    onlineReport: [],
    paid: '',
    discount: '',
    balance: '',
    mode: '',
    remark: '',
    caseDetails: {
      referredBy: '',
      collectionCenter: '',
      sampleCollectedBy: '',
      isOutsourceLab: false,
      recommendedTests: [],
    },
    paymentDetails: {
      total:"",
      discount:"",
      amountReceived:"",
      balance:"",
      mode:"",
      remark:""
    }
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCaseDetailsChange = (field, value) => {
    debugger
    setFormData((prev) => ({
      ...prev,
      caseDetails:{...prev.caseDetails,[field]: value},
    }));
    console.log("caseDetails", formData)
  };

  const handlePaymentDetailsChange = (field, value) => {
    debugger
    setFormData((prev) => ({
      ...prev,
      paymentDetails:{...prev.paymentDetails,[field]: value},
    }));
    console.log("paymentDetails", formData)
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    handleAddCase(formData,onClose, navigate);
    // onClose();,
  };





  return isOpen ? (
    <div className="fixed z-20 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 overflow-y-scroll custom-height-popup">
        <header className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Add New Case</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </header>
        <Accordian title="Patient Details">
            {/* Patient Details Section */}
        <PatientDetails formData={formData} onInputChange={handleInputChange} />
        </Accordian>
        
        <Accordian title="Case Details">
        {/* Case Details Section */}
        <CaseDetails formData={formData.caseDetails} onInputChange={handleCaseDetailsChange} setFormData = {setFormData}/>
        </Accordian>
        <Accordian title="Payment Details">
        {/* payment details*/}
          <PaymentDetail formData = {formData.paymentDetails} onInputChange =  {handlePaymentDetailsChange}/>
        </Accordian>
        {/* Footer Buttons */}
        <footer className="flex justify-start mt-6">          
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md mr-4" onClick={handleSubmit}>
            Create
          </button>
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md " onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  ) : null;
};

export default AddNewCaseModal;

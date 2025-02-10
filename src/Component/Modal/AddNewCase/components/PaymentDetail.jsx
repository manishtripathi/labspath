import React from 'react'
import ControlledInput from '../../../ControlledComponents/controlledInput'
import Select from "react-select"

const PaymentDetail = ({ formData, onInputChange }) => {
  const paymentModes = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Card', label: 'Card' },
    { value: 'UPI', label: 'UPI' },
    { value: 'Net Banking', label: 'Net Banking' },
  ];
  return (
    <>
      <h3 className="text-lg font-medium text-gray-800 mb-4">Payment Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Paid Amount</label>
          <ControlledInput type="number" value={formData.paid} onChange={(e) => onInputChange('paid', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Discount</label>
          <ControlledInput type="number" value={formData.discount} onChange={(e) => onInputChange('discount', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Balance</label>
          <ControlledInput type="number" value={formData.balance} onChange={(e) => onInputChange('balance', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Payment Mode</label>
          <Select options={paymentModes} onChange={(selected) => onInputChange('mode', selected.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Remarks</label>
          <ControlledInput type="text" value={formData.remark} onChange={(e) => onInputChange('remark', e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default PaymentDetail

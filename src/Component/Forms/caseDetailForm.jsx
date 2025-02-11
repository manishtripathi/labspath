import React, { useState } from "react";
//import './testformat.css'
import "../testformat/testformat.css";
import MainLayout from "../../libs/Layout/MainLayout";




function CaseDetailForm() {

  
const patientDetails = {
  Name: "Mr. HIMANSHU DUBEY",
  Age: "30 Years",
  "Lab No.": "185730768",
  Gender: "Male",
  "Ref By": "Self",
  Reported: "30/1/2025 4:38:12 AM",
  Collected: "27/1/2025 6:59:00 PM",
  "Report Status": "Final",
  "A/c Status": "P",
  "Processed at": "Dr. Lal Path Labs Ltd, Pandu Nagar, Kanpur - 208005",
  "Collected at": "CURE DIAGNOSTIC CENTRE, SARAIGALI, SARAIMEERA, Kannauj",
};

const testResults = [
  { name: "LIVER & KIDNEY PANEL", result: "", units: "mg/dL", reference: "10-50 mg/dL" },
  { name: "Glucose", result: "", units: "mg/dL", reference: "70-110 mg/dL" },
];
  // Manage test result state for editing
  const [editableResults, setEditableResults] = useState(testResults);

  // Handle input change
  const handleChange = (index, field, value) => {
    const updatedResults = [...editableResults];
    updatedResults[index][field] = value;
    setEditableResults(updatedResults);
  };

  return (
    <MainLayout>
      <h1 className="px-5 py-2 bg-yellow-500">Dr Lal Pathlab</h1>

      {/* Patient Details */}
      <div className="w-full flex justify-center mt-10">
        <table className="w-11/12 border border-black test-pdf">
          <tbody>
            {Object.entries(patientDetails).map(([key, value]) => (
              <tr className="border-b" key={key}>
                <td className="p-2 font-semibold">{key}</td>
                <td className="p-2">: {value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-center py-5 font-bold">Test Report</h1>

      {/* Test Results */}
      <div className="flex justify-center">
        <table className="w-11/12 border-separate border-spacing-2 border border-black">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Results</th>
              <th>Units</th>
              <th>Bio. Ref. Interval</th>
            </tr>
          </thead>
          <tbody>
            {editableResults.map((test, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{test.name}</td>
                <td className="p-2">
                  <input
                    type="text"
                    value={test.result}
                    onChange={(e) => handleChange(index, "result", e.target.value)}
                    className="border p-1"
                  />
                </td>
                <td className="p-2">{test.units}</td>
                <td className="p-2">{test.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}

export default CaseDetailForm;


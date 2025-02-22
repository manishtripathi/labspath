import React, { useEffect, useRef, useState } from "react";
//import './testformat.css'
import "../testformat/testformat.css";
import MainLayout from "../../libs/Layout/MainLayout";
import { useLocation, useParams } from "react-router-dom";
import { getCaseById } from "../../libs/services/admin-api";
import { FiUploadCloud } from "react-icons/fi";




function CaseDetailForm() {
  const { id } = useParams();
  const patient = useLocation()?.state?.patient
  const pdfRef = useRef();
  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=600,height=800");

    if (printWindow && pdfRef.current) {
      const htmlContent = pdfRef.current.outerHTML;

      printWindow.document.write(`
      <html>
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
        <style>
          @media print {
            body { margin: 0; padding: 20px; }
          }
        </style>
      </head>
      <body class="p-5">
        ${htmlContent}
      </body>
      </html>
      `);

      printWindow.document.close();
      printWindow.focus();

      // Wait for the new window to load styles before printing
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    } else {
      alert("Error printing document");
    }
  };
  const [patientDetails, setPatientDetails] = useState({
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
  });

  const testResults = [
    { name: "LIVER & KIDNEY PANEL", result: "", units: "mg/dL", reference: "10-50 mg/dL" },
    { name: "Glucose", result: "", units: "mg/dL", reference: "70-110 mg/dL" },
  ];
  // Manage test result state for editing
  const [editableResults, setEditableResults] = useState(testResults);
  const [editableMode, setEditableMode] = useState(true);


  const GenerateReport = () => {
    setEditableMode(false);
  }
  // Handle input change
  const handleChange = (index, field, value) => {
    const updatedResults = [...editableResults];
    updatedResults[index][field] = value;
    setEditableResults(updatedResults);
  };

  const getCase = async (id) => {
    const res = await getCaseById(id);
    if (res) {
      console.log(res);
      setPatientDetails(res?.patient);
    }
  }

  useEffect(function getcase() {
    if (!patient && !patientDetails?._id) {
      getCase(id);
    }
  }, [id, patient])

  return (
    <MainLayout>
      <div ref={pdfRef}>
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
                    {editableMode ? <input
                      type="text"
                      value={test.result}
                      onChange={(e) => handleChange(index, "result", e.target.value)}
                      className="border p-1"
                    /> :
                      <td className="p-2">{test.result}</td>
                    }
                  </td>
                  <td className="p-2">{test.units}</td>
                  <td className="p-2">{test.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      {editableMode ? <div className="flex justify-center">
        <div className="w-11/12 flex justify-end mt-2">
          <button className="min-w-max px-6 py-2 bg-green-600 rounded-sm" onClick={() => GenerateReport()}> Generate</button>
        </div>
      </div> :
        <div className="flex justify-center mt-8 p-6">
          <button
            title="Download PDF"
            className="text-end text-white bg-black" onClick={() => handlePrint()}><FiUploadCloud size={50} /></button>
        </div>}
    </MainLayout>
  );
}

export default CaseDetailForm;


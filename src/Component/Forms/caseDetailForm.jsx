import React, { useEffect, useRef, useState } from "react";
//import './testformat.css'
import "../testformat/testformat.css";
import MainLayout from "../../libs/Layout/MainLayout";
import { useLocation, useParams } from "react-router-dom";
import { getCaseById } from "../../libs/services/admin-api";
import { FiDownload, FiShare2, FiUploadCloud } from "react-icons/fi";
import { EmailShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { useDispatch, useSelector } from "react-redux";
import { DotLoader } from "react-spinners";
import { getPatientById } from "../../redux/slices/adminActionSlice";

function CaseDetailForm() {
  const { id } = useParams(); //this is patient id
  const patient = useLocation()?.state?.patient
  const pdfRef = useRef();
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  debugger
  const {PatientDetail} = useSelector((state) => state.adminAction);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getPatientById(id));
},[dispatch])
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


  const generateAndSharePDF = () => {
    if (!pdfRef.current) return;
  
    html2pdf()
      .from(pdfRef.current)
      .outputPdf("blob")
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  if(PatientDetail.loading) {
    return (<div className='loading-route'><DotLoader
      color="#30cdac"
      size={100}
    /></div>)
  }
  if (PatientDetail.error) {
    return <div className="flex justify-center items-center h-screen">
      <h1 className="text-red-500">Error fetching patient details</h1>
    </div>
  }
  

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

      {/* {editableMode ? <div className="flex justify-center">
        <div className="w-11/12 flex justify-end mt-2">
          <button className="min-w-max px-6 py-2 bg-green-600 rounded-sm" onClick={() => GenerateReport()}> Generate</button>
        </div>
      </div> :
        <div className="flex justify-center mt-8 p-6">
          <button
            title="Download PDF"
            className="text-end text-white bg-black" onClick={() => handlePrint()}><FiDownload size={50} /></button>
        </div>} */}
        {editableMode ? (
        <div className="flex justify-center">
          <div className="w-11/12 flex justify-end mt-2">
            <button
              className="min-w-max px-6 py-2 bg-green-600 rounded-sm hover:bg-green-700 transition-all"
              onClick={() => GenerateReport()}
            >
              Generate
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-8 p-6 gap-4">
          {/* Download Button */}
          <button
            title="Download PDF"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
            onClick={handlePrint}
          >
            <FiDownload size={24} />
            <span className="hidden md:inline">Download</span>
          </button>

          <div className="relative">
            <button
              title="Share PDF"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              onClick={generateAndSharePDF}
            >
              <FiShare2 size={24} />
              <span className="hidden md:inline">Share</span>
            </button>

            {pdfUrl && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-2 flex flex-col w-40">
                <WhatsappShareButton url={pdfUrl} className="w-full">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
                    <FaWhatsapp size={20} className="text-green-600" />
                    WhatsApp
                  </div>
                </WhatsappShareButton>

                <EmailShareButton url={pdfUrl} subject="PDF File" body="Download it here: " className="w-full">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
                    <FaEnvelope size={20} className="text-red-600" />
                    Email
                  </div>
                </EmailShareButton>

                <LinkedinShareButton url={pdfUrl} className="w-full">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100">
                    <FaLinkedin size={20} className="text-blue-600" />
                    LinkedIn
                  </div>
                </LinkedinShareButton>
              </div>
            )}
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default CaseDetailForm;


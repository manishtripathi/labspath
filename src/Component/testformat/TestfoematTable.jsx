import React, { useRef } from "react";
//import './testformat.css'
import "../testformat/testformat.css";
import MainLayout from "../../libs/Layout/MainLayout";
import { FiUploadCloud } from "react-icons/fi";
function TestfoematTable() {
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
                        body {
                            margin: 0;
                            padding: 20px;
                        }
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


  return (
    <MainLayout>
      <div ref={pdfRef}>
        <div>
          <div>
            <h1 className="px-5 py2 bg-yellow-500 ">Dr Lal Pathlab</h1>
          </div>

          <div>
            <div className="w-full flex justify-center mt-10">
              <table className="w-11/12 border border-black test-pdf">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Name</td>
                    <td className="p-2">: Mr. HIMANSHU DUBEY</td>
                    <td className="p-2 font-semibold">Age</td>
                    <td className="p-2">: 30 Years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Lab No.</td>
                    <td className="p-2">: 185730768</td>
                    <td className="p-2 font-semibold">Gender</td>
                    <td className="p-2">: Male</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Ref By</td>
                    <td className="p-2">: Self</td>
                    <td className="p-2 font-semibold">Reported</td>
                    <td className="p-2">: 30/1/2025 4:38:12 AM</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">Collected</td>
                    <td className="p-2">: 27/1/2025 6:59:00 PM</td>
                    <td className="p-2 font-semibold">Report Status</td>
                    <td className="p-2">: Final</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">A/c Status</td>
                    <td className="p-2">: P</td>
                    <td className="p-2 font-semibold">Processed at</td>
                    <td className="p-2">
                      : Dr. Lal Path Labs Ltd, Pandu Nagar, Kanpur - 208005
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Collected at</td>
                    <td className="p-2" colSpan="3">
                      : CURE DIAGNOSTIC CENTRE, <br /> SARAIGALI, SARAIMEERA,{" "}
                      <br /> SARAIGALI, SARAIM Kannauj
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="text-center py-5 font-bold">Test Report</h1>
            </div>
            <div className="flex justify-center">
              <table className=" w-11/12 border-separate border-spacing-2 border border-black">
                <thead>
                  <tr>
                    <th>Test Name</th>
                    <th>Results</th>
                    <th>Units</th>
                    <th>Bio. Ref. Interval</th>
                  </tr>
                  <tr className="my-5">
                    <th>SawsathFit Super 4</th>
                  </tr>
                </thead>
                <tbody className="mt-2 border border-black">
                    <tr>
                        <td className="text-start mt-10">
                           <span className="font-bold pt-2"> LIVER&KIDNEY PANEL,SERUM</span>
                            <p>(Spectrophotometry,Indirect ICE)</p>
                        </td>
                    </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    <div className="flex justify-center mt-8 p-6">
      <button
      title="Download PDF" 
      className="text-end text-white bg-black" onClick={()=>handlePrint()}><FiUploadCloud size={50}/></button>
    </div>
    </MainLayout>
  );
}

export default TestfoematTable;

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGripVertical } from "react-icons/fa6";
// import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

const TableWithPagination = ({ data, rowsPerPage = 5, dataRowHeadingList, actions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRow, setActiveRow] = useState(null);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleChangePage = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleActionClick = (rowId) => {
    setActiveRow(activeRow === rowId ? null : rowId);
  };

  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-100 text-gray-600 text-left">
          <tr>
            {dataRowHeadingList.map((heading, index) => (
              <th key={index} className="p-3 border-b border-gray-300">{heading}</th>
            ))}
            <th className="p-3 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {getPaginatedData().map((item) => (
            <tr
              key={item.id}
              className={item.id % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {Object.values(item).map((value, index) => (
                <td key={index} className="p-3 border-b border-gray-200">{value}</td>
              ))}
              <td className="p-3 border-b border-gray-200 relative">
                <button
                  className="flex items-center text-gray-600 bg-gray-200 px-2 py-1 rounded-lg shadow hover:bg-gray-300"
                  onClick={() => handleActionClick(item.id)}
                >
                  <FaGripVertical />
                </button>
                {activeRow === item.id && (
                  <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 p-2">
                    {actions(item)}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className="flex items-center text-gray-600 bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handleChangePage("prev")}
          disabled={currentPage === 1}
        >
          <FaArrowLeft className="mr-2" /> Previous
        </button>

        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="flex items-center text-gray-600 bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300 disabled:opacity-50"
          onClick={() => handleChangePage("next")}
          disabled={currentPage === totalPages}
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TableWithPagination;

// Example Usage
// const sampleData = [
//   { id: 1, name: "John Doe", email: "john@example.com" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   { id: 3, name: "Bob Johnson", email: "bob@example.com" },
// ];
// const headers = ["ID", "Name", "Email"];
// const actions = (row) => (
//   <div>
//     <button onClick={() => alert(`Edit ${row.name}`)}>Edit</button>
//     <button onClick={() => alert(`Delete ${row.name}`)}>Delete</button>
//   </div>
// );
// <TableWithPagination data={sampleData} rowsPerPage={5} dataRowHeadingList={headers} actions={actions} />

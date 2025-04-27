// import React, { useState, useEffect } from "react";

import { useEffect, useState } from "react";

const CustomTable = ({ data, columns, actions, customDialog, pagination, fetchData }) => {
  const [filters, setFilters] = useState({});
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeMenuRow, setActiveMenuRow] = useState(null);

  // Client-side pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (pagination && fetchData) {
      fetchData(pagination.currentPage, pagination.perPage);
    }
  }, [pagination?.currentPage, pagination?.perPage]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value.toLowerCase() }));
  };

  const handleChangePage = (newPage) => {
    if (pagination && fetchData) {
      fetchData(newPage + 1, pagination.perPage);
    } else {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (value) => {
    const newRowsPerPage = parseInt(value, 10);
    if (pagination && fetchData) {
      fetchData(1, newRowsPerPage);
    } else {
      setRowsPerPage(newRowsPerPage);
      setPage(0);
    }
  };

  const handleOpenMenu = (rowId) => {
    setActiveMenuRow(rowId);
  };

  const handleCloseMenu = () => {
    setActiveMenuRow(null);
  };

  const filteredData = data.filter((row) =>
    columns.every((col) =>
      col.filterable ? row[col.key]?.toString().toLowerCase().includes(filters[col.key] || "") : true
    )
  );

  const paginatedData = pagination
    ? filteredData
    : filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const totalItems = pagination ? pagination.totalItems : filteredData.length;
  const currentPage = pagination ? pagination.currentPage - 1 : page;
  const perPage = pagination ? pagination.perPage : rowsPerPage;

  return (
    <div className="shadow-md rounded-lg overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th key={col.key} className="p-3 text-left font-semibold">{col.label}</th>
            ))}
            {actions?.length ? <th className="p-3">Actions</th> : null}
          </tr>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="p-2">
                {col.filterable && (
                  <input
                    type="text"
                    placeholder={`Search ${col.label}`}
                    value={filters[col.key] || ""}
                    onChange={(e) => handleFilterChange(col.key, e.target.value)}
                    className="border rounded p-1 w-full"
                  />
                )}
              </th>
            ))}
            {actions?.length ? <th></th> : null}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="p-3">
                    {col.renderCell ? col.renderCell(row) : col.param ? row[col.key]?.[col.param] : row[col.key] || "-"}
                  </td>
                ))}
                {actions?.length ? (
                  <td className="p-3 relative">
                    <button onClick={() => handleOpenMenu(index)} className="p-1 border rounded">&#8942;</button>
                    {activeMenuRow === index && (
                      <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-10">
                        {actions.map((action, i) => (
                          <div
                            key={i}
                            onClick={() => { action.onClick(row); handleCloseMenu(); }}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            {action.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                ) : null}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions?.length ? 1 : 0)} className="text-center p-4">
                No matching records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4">
        <div>
          <label>
            Rows per page:
            <select
              value={perPage}
              onChange={(e) => handleChangeRowsPerPage(e.target.value)}
              className="ml-2 border p-1 rounded"
            >
              {[10, 25, 50].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <button
            disabled={currentPage === 0}
            onClick={() => handleChangePage(currentPage - 1)}
            className="p-1 border rounded mx-1 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {Math.ceil(totalItems / perPage)}
          </span>
          <button
            disabled={currentPage >= Math.ceil(totalItems / perPage) - 1}
            onClick={() => handleChangePage(currentPage + 1)}
            className="p-1 border rounded mx-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {customDialog}
    </div>
  );
};

export default CustomTable;
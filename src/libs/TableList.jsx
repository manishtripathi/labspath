import React from 'react'
import TableWithPagination from '../Component/Tablepagination'

const TableList = () => {
    const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];
const headers = ["ID", "Name", "Email"];
const actions = (row) => (
  <div>
    <button onClick={() => alert(`Edit ${row.name}`)}>Edit</button>
    <button onClick={() => alert(`Delete ${row.name}`)}>Delete</button>
  </div>
);
  return (
    <div>
      <TableWithPagination data={sampleData} rowsPerPage={6} dataRowHeadingList={headers} actions={actions} />
    </div>
  )
}

export default TableList

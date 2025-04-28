

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  TablePagination,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

export interface Column {
  key: string;
  label: string;
  filterable?: boolean;
  param?: string;
  renderCell?: (row: any) => React.ReactNode;
}

export interface Action {
  label: string;
  icon?: React.ReactNode;
  onClick: (row: any) => void;
  color?: "primary" | "secondary" | "error";
}

interface PaginationProps {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  onPageChange?:(event:unknown, newPage:number) =>void;
  onRowsPerPageChange?:(event: React.ChangeEvent<HTMLInputElement>) =>void
}

interface CustomTableProps {
  data: any[];
  columns: Column[];
  actions?: Action[];
  customDialog?: React.ReactNode;
  pagination?: PaginationProps;
  fetchData?: (page: number, perPage: number) => void; // Function to fetch new data
}

const CustomTable: React.FC<CustomTableProps> = ({ data, columns, actions, customDialog, pagination, fetchData }) => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [menuAnchor, setMenuAnchor] = useState<{ [key: number]: HTMLElement | null }>({});

  useEffect(() => {
    if (pagination && fetchData) {
      fetchData(pagination.currentPage, pagination.perPage);
    }
  }, [pagination?.currentPage, pagination?.perPage]); // Fetch data when pagination changes

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value.toLowerCase() }));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    if (pagination && fetchData) {
      fetchData(newPage + 1, pagination.perPage); // Convert to 1-based index
    }
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (pagination && fetchData) {
      fetchData(1, parseInt(event.target.value, 10)); // Reset to first page
    }
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>, rowId: number) => {
    setMenuAnchor((prev) => ({ ...prev, [rowId]: event.currentTarget }));
  };

  const handleCloseMenu = (rowId: number) => {
    setMenuAnchor((prev) => ({ ...prev, [rowId]: null }));
  };

  return (
    <TableContainer component={Paper} className="shadow-md rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            {columns.map((col) => (
              <TableCell key={col.key}>{col.label}</TableCell>
            ))}
            {actions?.length ? <TableCell>Actions</TableCell> : null}
          </TableRow>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key}>
                {col.filterable && (
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder={`Search ${col.label}`}
                    value={filters[col.key] || ""}
                    onChange={(e) => handleFilterChange(col.key, e.target.value)}
                    style={{ width: "100%" }}
                  />
                )}
              </TableCell>
            ))}
            {actions?.length ? <TableCell></TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.renderCell ? col.renderCell(row) : col.param ? row[col.key][col.param] : row[col.key] || "-"}
                  </TableCell>
                ))}
                {actions?.length ? (
                  <TableCell>
                    <IconButton onClick={(e) => handleOpenMenu(e, index)}>
                      <MoreVert />
                    </IconButton>
                    <Menu
                      anchorEl={menuAnchor[index]}
                      open={Boolean(menuAnchor[index])}
                      onClose={() => handleCloseMenu(index)}
                    >
                      {actions.map((action, i) => (
                        <MenuItem key={i} onClick={() => action.onClick(row)}>
                          {action.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                ) : null}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + (actions?.length ? 1 : 0)} style={{ textAlign: "center" }}>
                No matching records found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {pagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={pagination.totalItems}
          rowsPerPage={pagination.perPage}
          page={pagination.currentPage - 1} 
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      {customDialog}
    </TableContainer>
  );
};

export default CustomTable;




// "use client";

// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   TablePagination,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import { MoreVert } from "@mui/icons-material";

// export interface Column {
//   key: string;
//   label: string;
//   filterable?: boolean;
//   param?: string;
//   renderCell?: (row: any) => React.ReactNode; 
// }

// export interface Action {
//   label: string;
//   icon?: React.ReactNode;
//   onClick: (row: any) => void;
//   color?: "primary" | "secondary" | "error";
// }

// interface CustomTableProps {
//   data: any[];
//   columns: Column[];
//   actions?: Action[];
//   customDialog?: React.ReactNode;
//   pagination?:any
// }

// const CustomTable: React.FC<CustomTableProps> = ({ data, columns, actions, customDialog }) => {
//   const [filters, setFilters] = useState<{ [key: string]: string }>({});
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [menuAnchor, setMenuAnchor] = useState<{ [key: number]: HTMLElement | null }>({});

//   const handleFilterChange = (key: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [key]: value.toLowerCase() }));
//   };

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>, rowId: number) => {
//     setMenuAnchor((prev) => ({ ...prev, [rowId]: event.currentTarget }));
//   };

//   const handleCloseMenu = (rowId: number) => {
//     setMenuAnchor((prev) => ({ ...prev, [rowId]: null }));
//   };

//   const filteredData = data.filter((row) =>
//     columns.every((col) =>
//       filters[col.key] ? String(row[col.key] || "").toLowerCase().includes(filters[col.key]) : true
//     )
//   );

//   const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <TableContainer component={Paper} className="shadow-md rounded-lg">
//       <Table>
//         <TableHead>
//           <TableRow className="bg-gray-100">
//             {columns.map((col) => (
//               <TableCell key={col.key}>{col.label}</TableCell>
//             ))}
//             {actions?.length ? <TableCell>Actions</TableCell> : null}
//           </TableRow>
//           <TableRow>
//             {columns.map((col) => (
//               <TableCell key={col.key}>
//                 {col.filterable && (
//                   <TextField
//                     size="small"
//                     variant="outlined"
//                     placeholder={`Search ${col.label}`}
//                     value={filters[col.key] || ""}
//                     onChange={(e) => handleFilterChange(col.key, e.target.value)}
//                     style={{ width: "100%" }}
//                   />
//                 )}
//               </TableCell>
//             ))}
//             {actions?.length ? <TableCell></TableCell> : null}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {paginatedData.length > 0 ? (
//             paginatedData.map((row, index) => (
//               <TableRow key={index}>
//                 {columns.map((col) => (
//                   <TableCell key={col.key}>
//                     {col.renderCell ? col.renderCell(row) : col.param ? row[col.key][col.param]: row[col.key] || "-"}
//                   </TableCell>
//                 ))}
//                 {actions?.length ? (
//                   <TableCell>
//                     <IconButton onClick={(e) => handleOpenMenu(e, index)}>
//                       <MoreVert />
//                     </IconButton>
//                     <Menu
//                       anchorEl={menuAnchor[index]}
//                       open={Boolean(menuAnchor[index])}
//                       onClose={() => handleCloseMenu(index)}
//                     >
//                       {actions.map((action, i) => (
//                         <MenuItem key={i} onClick={() => action.onClick(row)}>
//                           {action.label}
//                         </MenuItem>
//                       ))}
//                     </Menu>
//                   </TableCell>
//                 ) : null}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={columns.length + (actions?.length ? 1 : 0)} style={{ textAlign: "center" }}>
//                 No matching records found.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={filteredData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//       {customDialog}
//     </TableContainer>
//   );
// };

// export default CustomTable;

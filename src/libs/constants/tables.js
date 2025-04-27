export const tableColumns =  [
    { key: "id", label: "AEID", filterable: true },
    { key: "first_name", label: "First Name", filterable: true },
    { key: "last_name", label: "Last Name", filterable: true },
    { key: "email", label: "Email", filterable: true },
    { key: "role", label: "Role", renderCell: (row) => row.roles?.length > 0 ? row.roles[0].name : "-" },
    { key: "status", label: "Status"},
  ];
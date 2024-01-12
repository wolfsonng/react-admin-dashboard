import React, { useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { fetchUsers } from "../services/apiService";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState({}); // Add this lin

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response.data); // Axios wraps the response data under the 'data' key
      })
      .catch((error) => {
        // Axios error handling
        console.error("Error fetching data:", error.message);
      });
  }, []);

  // Define columns for Material React Table
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "username", header: "Username" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role_name", header: "Role" },
    { accessorKey: "UsrStat_name", header: "Status" },
  ];

  const deactivateUsers = () => {
    selectedRows.forEach((value, key) => {
      // API call to deactivate user
      console.log(`Deactivating user ID: ${key}`);
      // Update users state as necessary
    });
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>User List</h2>
      <button onClick={deactivateUsers}>Deactivate Selected Users</button>
      <MaterialReactTable
        columns={columns}
        data={users}
        enableRowSelection={true}
        enableGlobalFilter={true}
      />
    </div>
  );
}

export default Users;

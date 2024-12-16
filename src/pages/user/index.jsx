import React from "react";
import { users } from "./userData";
import { height } from "@mui/system";

const User = () => {
  return (
    <div style={styles.userTableContainer}>
      <h3 style={styles.tableTitle}>User Details</h3>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>User ID</th>
            <th style={styles.tableCell}>Name</th>
            <th style={styles.tableCell}>Email</th>
            <th style={styles.tableCell}>Status</th>
            <th style={styles.tableCell}>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{user.id}</td>
              <td style={styles.tableCell}>{user.name}</td>
              <td style={styles.tableCell}>{user.email}</td>
              <td style={{ ...styles.tableCell, ...styles.statusCell(user.status) }}>{user.status}</td>
              <td style={styles.tableCell}>{user.lastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  userTableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '20px',
    marginTop: '20px',
  },
  tableTitle: {
    textAlign: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '12px',
    overflow: 'hidden',
    tableLayout: 'fixed' 
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '3px solid #e0e0e0'
  },
  tableRow: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e0e0e0',
    transition: 'background-color 0.3s ease',
    height: '30px'
  },
  tableCell: {
    padding: '8px', 
  },
  statusCell: (status) => ({
    color: status === 'Active' ? 'green' : status === 'Inactive' ? 'orange' : 'red',
    fontWeight: 'bold'
  }),
};

export default User;

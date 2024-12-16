import React from "react";
import { alerts } from "./alertData";
import { height } from "@mui/system";

const AlertTable = () => {
  return (
    <div style={styles.alertTableContainer}>
      <h3 style={styles.tableTitle}>Alert Details</h3>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>Alert ID</th>
            <th style={styles.tableCell}>Type</th>
            <th style={styles.tableCell}>Description</th>
            <th style={styles.tableCell}>Status</th>
            <th style={styles.tableCell}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{alert.id}</td>
              <td style={{ ...styles.tableCell, ...styles.typeCell(alert.type) }}>{alert.type}</td>
              <td style={styles.tableCell}>{alert.description}</td>
              <td style={{ ...styles.tableCell, ...styles.statusCell(alert.status) }}>{alert.status}</td>
              <td style={styles.tableCell}>{alert.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  alertTableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '20px',
    marginTop: '20px'
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
    textAlign: 'left',
    borderBottom: '1px solid #e0e0e0',
    transition: 'background-color 0.3s ease',
    height: '30px'
  },
  tableCell: {
    padding: '8px',
  },
  statusCell: (status) => ({
    color: status === 'Pending' ? 'orange' : 'green',
    fontWeight: 'bold'
  }),
  typeCell: (type) => ({
    color: type === 'Critical' ? 'red' : type === 'Warning' ? 'orange' : 'blue',
    fontWeight: 'bold'
  }),
  tableRowHover: {
    backgroundColor: '#f9f9f9'
  }
};

export default AlertTable;

import React from "react";
import { devices } from "./deviceData";
import { height } from "@mui/system";

const Devices = () => {
  return (
    <div style={styles.deviceTableContainer}>
      <h3 style={styles.tableTitle}>Device Details</h3>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.deviceIdHeader}>Device ID</th>
            <th style={styles.tableCell}>User ID</th>
            <th style={styles.tableCell}>Device Model</th>
            <th style={styles.tableCell}>IP Address</th>
            <th style={styles.tableCell}>Last Used</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id} style={styles.tableRow}>
              <td style={styles.deviceIdCell}>{device.id}</td>
              <td style={styles.tableCell}>{device.userId}</td>
              <td style={styles.tableCell}>{device.model}</td>
              <td style={styles.tableCell}>{device.ipAddress}</td>
              <td style={styles.tableCell}>{device.lastUsed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  deviceTableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '20px',
    marginTop: '20px',
    // tableLayout: 'fixed'
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
    tableLayout: 'fixed' // Đặt layout cố định để kích thước cột không bị tràn
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
  /** Giải pháp 1: Cố định chiều rộng cho Device ID */
  deviceIdHeader: {
    width: '20%', // Cố định chiều rộng của cột Device ID
    padding: '8px',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#333',
  },
  deviceIdCell: {
    width: '30%', // Cố định chiều rộng của cột Device ID
    padding: '8px',
    overflow: 'hidden',
  }
};

export default Devices;

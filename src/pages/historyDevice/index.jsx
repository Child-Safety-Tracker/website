import React from 'react';
import { historyData } from './historyData';

const HistoryDevice = () => {
  // Lấy danh sách các deviceId không trùng lặp
  const uniqueDeviceIds = [...new Set(historyData.map(item => item.deviceId))];

  return (
    <div style={styles.historyContainer}>
      {/* Chỉ hiển thị tiêu đề một lần cho mỗi deviceId */}
      {uniqueDeviceIds.map((deviceId, index) => (
        <h3 key={index} style={styles.tableTitle}>
          Location History of Device: {deviceId}
        </h3>
      ))}
      
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>Location ID</th>
            <th>Date Published</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td>{item.locationId}</td>
              <td>{item.datePublished}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  historyContainer: {
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
    padding: '8px'
  }
};

export default HistoryDevice;

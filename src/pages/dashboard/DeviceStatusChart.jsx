import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { devices } from "../device/deviceData"; // Import dữ liệu từ deviceData.js

// Đăng ký các thành phần của Chart.js
Chart.register(ArcElement, Tooltip, Legend);

// Custom plugin để hiển thị phần trăm bên trong biểu đồ
const percentagePlugin = {
  id: 'percentagePlugin',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset) => {
      const total = dataset.data.reduce((acc, curr) => acc + curr, 0);
      dataset.data.forEach((value, index) => {
        const percentage = ((value / total) * 100).toFixed(1); // Tính phần trăm với 1 chữ số thập phân
        const meta = chart.getDatasetMeta(0);
        const element = meta.data[index];
        
        if (element) {
          const { x, y } = element.tooltipPosition(); // Lấy vị trí x, y của phần
          ctx.fillStyle = '#333232'; // Màu chữ
          ctx.font = 'bold 14px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${percentage}%`, x, y); // Vẽ phần trăm vào giữa phần của biểu đồ
        }
      });
    });
  }
};

// Đăng ký plugin cho biểu đồ
Chart.register(percentagePlugin);

// Đếm số lượng trạng thái của thiết bị
const countDeviceStatus = (devices) => {
  return devices.reduce((count, device) => {
    const status = device.status?.toLowerCase();
    if (!status) return count; // Nếu status không tồn tại, bỏ qua thiết bị này
    count[status] = (count[status] || 0) + 1;
    return count;
  }, { active: 0, inactive: 0, banned: 0 });
};

const DeviceStatusChart = () => {
  // Tự động đếm số lượng thiết bị theo trạng thái
  const deviceStatusCount = countDeviceStatus(devices);

  // Dữ liệu cho biểu đồ hình tròn
  const data = {
    labels: ['Active', 'Inactive', 'Banned'],
    datasets: [
      {
        label: 'Trạng thái thiết bị',
        data: [deviceStatusCount.active, deviceStatusCount.inactive, deviceStatusCount.banned],
        backgroundColor: ['#5cd65c', '#ff9800', '#ff3333'], // Màu sắc của các phần
        hoverBackgroundColor: ['#99e699', '#ffb74d', '#ff8080'], // Màu sắc khi hover
      }
    ]
  };

  // Tùy chỉnh các tùy chọn của biểu đồ
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            const label = tooltipItem.label;
            return `${label}: ${value} thiết bị`;
          }
        }
      }
    }
  };

  return (
    <div style={styles.chartContainer}>
      <Pie data={data} options={options} />
    </div>
  );
};

const styles = {
  chartContainer: {
    width: '100%',
    height: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px'
  }
};

export default DeviceStatusChart;

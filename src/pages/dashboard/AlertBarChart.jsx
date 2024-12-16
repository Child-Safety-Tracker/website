import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

// third-party
import ReactApexChart from 'react-apexcharts';
import { alerts } from '../alert/alertData';
// chart options
const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%', // Độ rộng của cột
      borderRadius: 4,
      distributed: true // Tách màu của từng cột
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Critical', 'Warning', 'Info'],
    
  },

  colors: ['#ff0000', '#ff9800', '#0000ff'] 
};

// ==============================|| ALERT BAR CHART ||============================== //

export default function AlertBarChart() {
  const countAlertTypes = (alerts) => {
    return alerts.reduce((count, alert) => {
      const type = alert.type?.toLowerCase();
      if (!type) return count; // Nếu type không tồn tại, bỏ qua
      count[type] = (count[type] || 0) + 1;
      return count;
    }, { critical: 0, warning: 0, info: 0 });
  };
  const alertTypeCount = countAlertTypes(alerts);

  const [series] = useState([
    {
      name: 'Alert Count',
      data: [alertTypeCount.critical, alertTypeCount.warning, alertTypeCount.info] // Tự động cập nhật dữ liệu
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </Box>
  );
}


import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// Import dữ liệu người dùng từ userData.js
import { users } from '../user/userData';

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};



export default function UserDailyChart({ slot }) {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  // Đếm số lượng người dùng từ userData.js
  const userCount = users.filter(user => user.id).length;

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories:
          slot === 'month'
            ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: 'User Count',
      data: [userCount, userCount, userCount, userCount, userCount, userCount, userCount] // Hiển thị userCount
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'User Count',
        data: slot === 'month' 
          ? [userCount, userCount, userCount, userCount, userCount, userCount, userCount, userCount, userCount, userCount, userCount, userCount] 
          : [userCount, userCount, userCount, userCount, userCount, userCount, userCount]
      }
    ]);
  }, [slot, userCount]);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
}

UserDailyChart.propTypes = { slot: PropTypes.string };

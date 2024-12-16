// material-ui

import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import TotalCard from './TotalCard';
import AlertBarChart from './AlertBarChart';
import UserDailyCard from './UserDailyCard';
import DeviceStatusChart from './DeviceStatusChart';
import UserTable from '../user/index';
import AlertTable from '../alert/index';
import Device from '../device/index';
import { users } from '../user/userData';
import { alerts } from '../alert/alertData';
import { devices } from '../device/deviceData';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const totalUsers = users.filter((user) => user.id).length;

  // Đếm số lượng cảnh báo
  const totalAlerts = alerts.filter((alert) => alert.id).length;

  // Đếm số lượng thiết bị
  const totalDevices = devices.filter((device) => device.id).length;

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalCard title="Total Users" count={totalUsers} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalCard title="Total Alerts" count={totalAlerts} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalCard title="Total Devices" count={totalDevices} />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      {/* Biểu đồ Daily User*/}
      <Grid item xs={12} md={7} lg={8}>
        {<UserDailyCard />}
      </Grid>

      {/* Biểu đồ Alert By Types*/}
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Alert by Types</Typography>
          </Grid>
          <Grid item />
        </Grid>

        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Alert
              </Typography>
            </Stack>
          </Box>
          <AlertBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}

      <Grid item xs={12} md={7} lg={8}>
        <UserTable />
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Device Status</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <DeviceStatusChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Device />
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <AlertTable />
      </Grid>
    </Grid>
  );
}

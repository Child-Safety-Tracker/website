import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

// const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const User = Loadable(lazy(() => import('pages/user/index')));
const Alert = Loadable(lazy(() => import('pages/alert/index')));
const Device = Loadable(lazy(() => import('pages/device/index')));
const Location = Loadable(lazy(() => import('pages/location/index')));
const Setting = Loadable(lazy(() => import('pages/setting/index')));
const HistoryDevice = Loadable(lazy(() => import('pages/historyDevice/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'user',
      element: <User />
    },
    {
      path: 'alert',
      element: <Alert />
    },
    {
      path: 'device',
      element: <Device />
    },
    { 
      path: '/location/historyDevice', 
      element: <HistoryDevice /> 
    },

    {
      path: 'location',
      element: <Location />
    },
    // {
    //   path: 'location',
    //   children: [
    //     {
    //       path: 'history',
    //       element: <HistoryDevice />
    //     }
    //   ]
    // },
    {
      path:'setting',
      element: <Setting />
    },

  ]
};

export default MainRoutes;

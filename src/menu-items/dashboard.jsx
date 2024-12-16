// assets
import { DashboardOutlined, UserOutlined, AlertOutlined, MobileOutlined, EnvironmentOutlined, BookOutlined, SettingOutlined} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  AlertOutlined,
  MobileOutlined,
  EnvironmentOutlined,
  BookOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'user',
      title: 'User',
      type: 'item',
      url: '/user',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'alert',
      title: 'Alert',
      type: 'item',
      url: '/alert',
      icon: icons.AlertOutlined,
      breadcrumbs: false
    },
    {
      id: 'device',
      title: 'Device',
      type: 'item',
      url: '/device',
      icon: icons.MobileOutlined,
      breadcrumbs: false
    },
    {
      id: 'location',
      title: 'Location',
      type: 'item',
      url: '/location',
      icon: icons.EnvironmentOutlined,
      breadcrumbs: false
    },

  ]
};

export default dashboard;

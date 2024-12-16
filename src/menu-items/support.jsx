// assets
import { SettingOutlined, QuestionOutlined } from '@ant-design/icons'; 

// icons
const icons = {
  SettingOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',  
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'setting',
      title: 'Setting',
      type: 'item',
      url: '/setting',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    },
  ]
};

export default support;

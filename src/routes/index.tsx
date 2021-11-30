import { AntDesignOutlined } from '@ant-design/icons';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home'));
const Rider = lazy(() => import('../pages/manage-rider'));
const AboutPage = lazy(() => import('../pages/about'));

type RouteType = {
  name: string;
  path: string;
  icon?: React.ReactNode;
  roles?: string[];
  layout?: boolean;
  redirect?: string;
  routes?: {
    name: string;
    path: string;
    icon?: React.ReactNode;
    roles?: string[];
    layout?: boolean;
    redirect?: string;
    component: React.ReactNode;
  }[];
  component: React.ReactNode;
}[];

export const routes: RouteType = [
  {
    path: '',
    name: 'Home',
    icon: <AntDesignOutlined />,
    component: HomePage,
  },
  {
    path: 'manage-rider',
    name: 'Manage Rider',
    icon: <AntDesignOutlined />,
    component: Rider,
    routes: [
      {
        path: 'manage-rider/add-rider',
        name: 'Home',
        icon: <AntDesignOutlined />,
        component: HomePage,
      },
    ],
  },
  {
    path: 'parcel-management',
    name: 'Parcel Management',
    icon: <AntDesignOutlined />,
    component: AboutPage,
  },
  {
    path: 'manage-corp-acc',
    name: 'Manage Corporate Account',
    icon: <AntDesignOutlined />,
    component: AboutPage,
    routes: [
      {
        path: 'manage-corp-acc/service-area',
        name: 'Service Area Management',
        icon: <AntDesignOutlined />,
        component: HomePage,
      },
    ],
  },
];

export default routes;

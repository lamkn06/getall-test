import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import routes from '../../routes';
import './index.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;
interface Props {
  collapsed: boolean;
  onToggle?: () => void;
}

export const SideBar: React.FC<Props> = ({ collapsed, children, onToggle }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider-bar"
    >
      {children}
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {routes.map(route =>
          route.routes ? (
            <SubMenu key={route.path} icon={route.icon} title={route.name}>
              {route.routes.map(subRoute => (
                <Menu.Item key={subRoute.path}>
                  <Link to={subRoute.path}>{subRoute.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={route.path} icon={route.icon}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          ),
        )}
      </Menu>
      <div className="sider-bar__trigger">
        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: onToggle,
        })}
      </div>
    </Sider>
  );
};

import React, { useCallback, useMemo } from 'react';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './index.scss';
import { Avatar, Dropdown, Menu } from 'antd';

interface Props {
  onMenuClick?: () => void;
}

export const AvatarDropdown: React.FC<Props> = ({ onMenuClick }) => {
  const menuHeaderDropdown = useMemo(
    () => (
      <Menu
        selectedKeys={[]}
        onClick={onMenuClick}
        className="avatar-dropdown__menu"
      >
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    ),
    [onMenuClick],
  );
  return (
    <Dropdown
      overlay={menuHeaderDropdown}
      trigger={['click']}
      placement="bottomRight"
      overlayClassName="avatar-dropdown"
    >
      <Avatar
        size={32}
        icon={<UserOutlined />}
        alt="avatar"
        // src={currentUser.avatar}
      />
    </Dropdown>
  );
};

import { Header as AntHeader } from 'antd/lib/layout/layout';
import { AvatarDropdown } from '../avatar-dropdown';
import './index.scss';

export const Header: React.FC = () => (
  <AntHeader className="header">
    <AvatarDropdown />
    <span className="header__name">User</span>
  </AntHeader>
);

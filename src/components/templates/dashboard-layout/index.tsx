import { useEffect, useState } from 'react';
import { Breadcrumb, Card, Layout, Space, Typography } from 'antd';
import { Header } from '../../header';
import { SideBar } from '../../sidebar';
import { Logo } from '../../logo';
import { useDetectMobile } from '../../../hooks/useDetectMobile';
import './index.scss';

const { Content } = Layout;
const { Title } = Typography;

const DashboardLayout: React.FC = ({ children }) => {
  const isMobile = useDetectMobile();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  const onToggle = () => setCollapsed(oldVal => !oldVal);

  return (
    <Layout className="dashboard-layout">
      <SideBar collapsed={collapsed} onToggle={onToggle}>
        <div className="dashboard-layout__logo">
          <Logo src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          <span>Get all</span>
        </div>
      </SideBar>
      <Layout>
        <Header />
        <Content className="dashboard-layout__content">
          <Card size="small">
            {/* TODO: Create new Breadcrumb component */}
            <Breadcrumb style={{ marginBottom: 10 }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Title level={4}>Ant Design</Title>
            <div className="dashboard-layout__body">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              {children}
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;

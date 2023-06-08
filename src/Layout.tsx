import { useParams } from "react-router-dom";
import { ReactNode, Key, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  MessageOutlined,
  HomeOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  PieChartOutlined,
  TeamOutlined,
  LineChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button } from "antd";

import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    label,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="1/">Home</Link>, "1", <HomeOutlined />),
  getItem(<Link to="1/dashboard">Dashboard</Link>, "2", <PieChartOutlined />),

  getItem("Staff", "sub1", <BookOutlined />, [
    getItem(<Link to="1/teaching">Teaching</Link>, "3"),
    getItem(<Link to="1/non-teaching">Non Teaching</Link>, "4"),
  ]),
  getItem(<Link to="1/students">Students</Link>, "5", <TeamOutlined />),

  getItem(<Link to="1/parents">Parents</Link>, "6", <UsergroupAddOutlined />),
  getItem("Finance & Accounting", "sub2", <MoneyCollectOutlined />, [
    getItem(<Link to="1/school-fees">School Fees</Link>, "7"),
    getItem(<Link to="1/payroll">Payroll</Link>, "8"),
  ]),
  getItem(<Link to="1/forum">Chat & Forum</Link>, "9", <MessageOutlined />),
  getItem(<Link to="1/library">Library</Link>, "10", <LineChartOutlined />),

  getItem("Settings", "sub3", <SettingOutlined />, [
    getItem(<Link to="1/roles">Roles</Link>, "11"),
    getItem(<Link to="1/customize-app">Customize App</Link>, "12"),
  ]),
];

const { Header, Sider, Content } = Layout;

interface IProps {
  children?: ReactNode;
}

const AppLayout = ({ children, ...props }: IProps) => {
  const { adminId } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider
        className="pt-20"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          //   onClick={filtered}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            minHeight: 280,
            // padding: 24,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

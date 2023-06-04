import { useParams } from "react-router-dom";
import { ReactNode, Key, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  MessageOutlined,
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
  getItem(<Link to="1">Dashboard</Link>, "1", <PieChartOutlined />),

  getItem("Staff", "sub1", <BookOutlined />, [
    getItem(<Link to="1/teaching">Teaching</Link>, "2"),
    getItem(<Link to="1/non-teaching">Non Teaching</Link>, "3"),
  ]),
  getItem(<Link to="1/students">Students</Link>, "4", <TeamOutlined />),

  getItem(<Link to="1/parents">Parents</Link>, "5", <UsergroupAddOutlined />),
  getItem("Finance & Accounting", "sub2", <MoneyCollectOutlined />, [
    getItem(<Link to="1/school-fees">School Fees</Link>, "6"),
    getItem(<Link to="1/payroll">Payroll</Link>, "7"),
  ]),
  getItem(<Link to="1/forum">Chat & Forum</Link>, "8", <MessageOutlined />),
  getItem(<Link to="1/library">Library</Link>, "9", <LineChartOutlined />),

  getItem("Settings", "sub3", <SettingOutlined />, [
    getItem(<Link to="1/roles">Roles</Link>, "10"),
    getItem(<Link to="1/customize-app">Customize App</Link>, "11"),
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
            marginTop: " 2px",
            padding: 24,
            minHeight: 280,
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

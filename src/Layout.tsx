import { useParams } from "react-router-dom";
import { ReactNode, Key, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  MessageOutlined,
  BookOutlined,
  PicCenterOutlined,
  UsergroupAddOutlined,
  PieChartOutlined,
  TeamOutlined,
  LineChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button } from "antd";

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
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined />),

  getItem("Staff", "sub1", <BookOutlined />, [
    getItem("Teaching ", "2"),
    getItem("Non-teaching ", "3"),
  ]),
  getItem("Students", "4", <TeamOutlined />),
  //   getItem("Students", "sub2", <TeamOutlined />, [
  //     getItem("Option1", "5"),
  //     getItem("Option2", "6"),
  //   ]),
  getItem("Parents", "5", <UsergroupAddOutlined />),
  getItem("Finance & Accounting", "sub2", <MoneyCollectOutlined />, [
    getItem("Option1", "6"),
    getItem("Option2", "7"),
  ]),
  getItem("Chat & Forum", "8", <MessageOutlined />),
  getItem("Library", "9", <LineChartOutlined />),

  getItem("Settings", "sub3", <SettingOutlined />, [
    getItem("Roles", "10"),
    getItem("Customize", "11"),
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
            margin: "24px 16px",
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

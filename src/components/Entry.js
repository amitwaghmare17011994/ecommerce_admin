import React from "react";
import { Layout, Menu } from "antd";
import { MainRoutes } from "../routes";
import { menuItems, getDefaultSelectedPath } from "../utils";

const { Header, Content, Sider } = Layout;

export const Entry = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme="dark"
        style={{ marginTop: 60 }}
        defaultSelectedKeys={getDefaultSelectedPath()}
      >
        {menuItems().map(({ title, path, key }) => (
          <Menu.Item key={key} onClick={() => (window.location = "#" + path)}>
            {title}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
        fixed
      />
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <MainRoutes />
        </div>
      </Content>
    </Layout>
  </Layout>
);

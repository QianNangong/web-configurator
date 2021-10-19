import React from 'react';
import './App.css';

import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function listDevices() {
  navigator.usb.requestDevice({filters: [{vendorId: 0x05ac}]}).then((devices: USBDevice) => {
    console.log(devices)
  }, (e) => {
    console.log(e)
  });
}

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">aaa</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={180} className="site-layout-background">
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">www</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>qwq</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280 }}>
            awa
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}


export default App;

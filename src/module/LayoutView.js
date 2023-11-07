import React, {  useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {TableData} from './TableData';
import AddForm from './AddForm';
const { Header, Content, Footer} = Layout;


const items1 = ['Users', 'Add Users'].map((key,index) => ({
  key:index,
  label: `${key}`,
}));

const LayoutView = () => {

  const [tabs,setTabs] = useState(0);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onTabSelect=({item,key})=>{
       console.log(key);
       setTabs(key);
  }
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[tabs]} items={items1} onSelect={onTabSelect}/>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
     
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
   
          <Content
            style={{
              padding: '0 24px',
              minHeight: '100vh',
            }}
          >
          {tabs==0?<TableData/>:<AddForm/>}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default LayoutView;
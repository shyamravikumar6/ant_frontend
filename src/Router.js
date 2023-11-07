import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './module/Login';
import LayoutView from './module/LayoutView';
import { UserContextWrapper } from './context/userContext';
const Loader = () =>(
  
  <Spin
  indicator={
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  }/>
);
const router = createBrowserRouter([
  {
    path: "/login",
    element:  <Login/>,
    loader: Loader,

  },
  {
    path: "/layout",
    element:  <UserContextWrapper/>,
    loader: Loader,

  },
]);

export const  RouterWrapper = ()=>(<RouterProvider router={router}/>);

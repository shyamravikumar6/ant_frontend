import React, { useContext} from 'react';
import {ConfigProvider} from 'antd';
import { RouterWrapper } from './Router';
import { LoginContext, LoginContextWrapper } from './context/loginContext';


function App() {

 const {token}=useContext(LoginContext);
 //if(!token) window.location.href="/home";
  return (
   <ConfigProvider
    theme ={{
      token:{
        colorPrimary:'#00b96b',
        borderRadius:2,
        colorBgContainer:'#f6ffed',
      }
    }}
    >
      <LoginContextWrapper>
     <RouterWrapper />
     </LoginContextWrapper>
    </ConfigProvider>
  );
}

export default App;

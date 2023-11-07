import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input ,Flex,Card} from 'antd';
import { LoginContext } from '../context/loginContext';



const cardStyle={}
const imgStyle={ display: 'block',
width: 400
};


const Login = () => {

  const {login,dispatch} = useContext(LoginContext);
  
  const onFinish=(values)=>{
  //   console.log(login);
    dispatch({type:'login',data:values});
    window.location.href='/layout';
   // console.log(values);
  }
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 
   return (
      <Flex style={{padding:"20rem"}} justify='center' align='center' vertical={false}>
   <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
   
   <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
   
   
   <Flex>   
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  </Flex>
  </Flex>
  </Card>

  </Flex>
  
  
)
}
;
export default Login;
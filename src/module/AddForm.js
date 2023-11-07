import { UploadOutlined ,UserAddOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Flex,
  Card,
  Upload,
  notification,
} from 'antd';
import { UserContext } from '../context/userContext';
import {getBase64} from '../utils'
import {addUsers} from '../api'
const props ={
    multiple:false,
    name:'image',

}

const AddForm = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const {users,dispatch} = useContext(UserContext);
  
  
  
    const onFinish=async(values)=>{
        console.log(values);
      // const Image = getBase64(values.Image.fileList[0]);
        values.image = values.Image.fileList[0].thumbUrl;
       delete values.Image;
      
       console.log("bankai");
     const result =  await  addUsers(values,({data,error})=>{
          console.log('1');
          console.log(error);
          if(!error){
            console.log(data);
          dispatch({type:'add',data});
          api['success']({
            message: 'Notification Title',
            description:'Successfully added'
            
          });
          return;
          }
          api['error']({
            message: 'Notification Title',
            description:error
            
          });
        })
        console.log(result,'addusers');

    }
    
    const onFinishFailed=(error)=>{
        console.log(error);
    }
  
  return (
    <Flex vertical ={true} align='center' justify='center'>
        <Card hoverable    style={{ width: 500 }}> 
        {contextHolder}
    <Form
    form={form}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
   
    
        <Form.Item  rules={[{required:true}]} name="name">
          <Input placeholder='Name' type='text'/>
        </Form.Item>
       

        <Form.Item  rules={[{required:true}]} name="email" >
          <Input placeholder='Email' type='email'/>
        </Form.Item>
    
        <Form.Item rules={[{required:true}]} name="age">
          <InputNumber type='number' placeholder='Age' min={10} max={100} maxLength={3} />
        </Form.Item>
           
        <Form.Item rules={[{required:true}]} name="mobile" >
          <InputNumber style={{width:'20rem'}}  placeholder='Mobile' type='number' minLength={10} maxLength={10} />
        </Form.Item>
 
        <Form.Item rules={[{required:true}]} name="Image" >
        <Upload

      accept="image/png, image/jpeg"
      maxCount={1}
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      listType="picture"
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
        </Form.Item>
        <Form.Item style={{float:'right'}}>
          <Button htmlType='submit'>
          <UserAddOutlined/>
            Add</Button>
        </Form.Item>
       
      </Form>
      </Card>
      </Flex>

  );
};
export default AddForm;
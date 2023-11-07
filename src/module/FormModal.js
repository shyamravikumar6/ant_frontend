import React, { useContext} from 'react';
import { Button, Modal ,Form,Input,InputNumber, Flex} from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { UserContext } from '../context/userContext';
import { editUsers } from '../api';



const FormModal = ({user,setIsModalOpen,isModalOpen}) => {
const {dispatch,loading,setLoading}  = useContext(UserContext);

  const handleOk = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish=(values)=>{
    console.log(values);
    const changedValues={};
    delete values.Image;
    delete user.image;
    Object.keys(values).forEach(key=>{
      if(values[key]!==user[key])changedValues[key]=values[key];
    })
    changedValues.id=user.id;
  //console.log(changedValues,values,user)
    if(Object.keys(changedValues).length){
      setLoading(true);
    editUsers(changedValues,({err,data})=>{
      console.log(err,data);
      dispatch({type:'edit',data:{...changedValues}}); handleOk(); setLoading(false) }).finally(()=>{
  
     
      handleOk();
    });
  }
   
}

const onFinishFailed=(error)=>{
    console.log(error);
}

const [form] = Form.useForm();
  return (
    <>
  
      <Modal title="Edit User"  cancelButtonProps={{style:{display:'none'}}} okButtonProps={{style:{display:'none'}}}  open={isModalOpen}  onCancel={handleCancel}>
      <Form
      key="edit"
    form={form}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    initialValues={user}
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
        <Flex justify='flex-end'>
        <Form.Item style={{left:'4rem'}}> 
          <Button htmlType='submit'>
          <UserAddOutlined/>
            Edit</Button>
            </Form.Item>
            </Flex>
        </Form>
      </Modal>
    </>
  );
};
export default FormModal;
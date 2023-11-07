import { Avatar, Space, Spin, Table } from "antd";
import React, { useContext ,useEffect,useState} from "react";
import { EditTwoTone,DeleteTwoTone } from '@ant-design/icons';
import { UserContext } from "../context/userContext";
import FormModal from "./FormModal";
import { deleteUsers, getAllUsers } from "../api";


  export  const TableData= ()=> {
    const {users,dispatch,loading,setLoading} = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user,setUser]=useState({});
   
    useEffect(()=>{
      console.log('got side effenct')
      if(!users.length){
        setTimeout(()=>{
         getAllUsers(({data,error})=>{
           if(!error){
            dispatch({type:"fetch",data});
           }    
           
         }).finally(()=>{
           setLoading(false)
         })
      },1000);
    }else {
      setLoading(false);
    }
  
  },[loading]);

    const setAction =(type,user)=>{
      if(type==='edit'){
        setUser(user);
        setIsModalOpen(true);
      
        return;
      }
      if(type==='delete'){
        deleteUsers(user.id,({err,data})=>{
        dispatch({type:'delete',data:user});
        });
        return;
      }
    }

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        
        
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title:'Mobile',
        dataIndex:'mobile',
        key:'mobile'
      },
  
      {title:'Action',
        key:"action",
        render: (_, record) => (
          <Space >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     middle" style={{cursor:'pointer'}}>
            <EditTwoTone  onClick={()=>setAction('edit',record)} />
            <DeleteTwoTone  onClick={()=>setAction('delete',record)} />
          </Space>
        ),
      }
      
    ];
    
  return(
   <> 
    <FormModal user={user} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
   <Table dataSource={users} loading={{ indicator: <div><Spin /></div>, spinning:loading}} columns={columns}  />
   </>
  );
  }
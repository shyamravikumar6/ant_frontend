import { Avatar, Space, Spin, Table } from "antd";
import React, { useContext ,useEffect,useState} from "react";
import { EditTwoTone,DeleteTwoTone } from '@ant-design/icons';
import { UserContext } from "../context/userContext";
import FormModal from "./FormModal";
import { deleteUsers, getAllUsers } from "../api";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

let lastIndex = 0
const updateIndex = () => {
  lastIndex++
  return lastIndex
}
  export  const TableData= ()=> {
    const {users,dispatch,loading,setLoading,user,setUser} = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
   
   
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
  
  },[]);
  
    const setAction =(type,user)=>{
      if(type==='edit'){
        console.log('bankai',user,users);
        setUser({...users.find(el=>el.id===user.id)});
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
        render:(_,record)=>{
       // console.log(record.image);
          return(
           <Space>
            <Avatar src={record.image} />
            <p>{record.name}</p>
           </Space>
        )
        }
        
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: `id${updateIndex()}`,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: `id${updateIndex()}`,
      },
      {
        title:'Mobile',
        dataIndex:'mobile',
        key: `id${updateIndex()}`,
      },
  
      {title:'Action',
      dataIndex:'action',
         key: `id${updateIndex()}`,
        render: (_, record) => {
         console.log(record.id);
            return(<>
              <Space key= {`id${updateIndex()}`} size={"middle"}>
                <EditTwoTone key={ `id${updateIndex()}`} onClick={()=>setAction('edit',record)} />
                <DeleteTwoTone key={`id${updateIndex()}`} onClick={()=>setAction('delete',record)} />
                
              </Space>
            </>)
        }
      }
      
    ];
    
  return(
   <> 
    <FormModal user={user} setIsModalOpen={setIsModalOpen} setUser={setUser} isModalOpen={isModalOpen} />
   <Table rowKey={"id"} dataSource={[...users]} loading={{ indicator: <div><Spin /></div>, spinning:loading}} columns={columns}  />
   </>
  );
  }
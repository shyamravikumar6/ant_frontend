


function Users(users,action){
 console.log('bamnlao');
    //const {type} = action;
  
    switch (action.type){
    case 'fetch':{
      console.log(action.data);
      return action.data;
    }
    case 'add':{
      console.log(action.data);
       users.unshift(action.data);
      return users;
    }  
    case 'edit':{
      console.log('edit');
        const userIndex = users.findIndex(el=>el.id==action.data.id);
        console.log(userIndex)
        // let usersEle = users[userIndex];
        // usersEle = {...usersEle,...action.data};
        // console.log(usersEle,'edit users');
        users[userIndex]=action.data;
        console.log(users);
        return users;
    }
    case  'delete':{
        const filterUsers = users.filter(el=>el.id!==action.data.id);
       return filterUsers;
    }
    default:throw Error('not any action')
  }

}

export default Users;
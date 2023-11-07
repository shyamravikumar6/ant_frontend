
function LoginReducer(token,action){
  
    if(action.type==='login'){
        console.log("bankai")
        return  {
            ...action.data
        }
    }

    if(action.type==='logout'){
       
      return {}; 
    }
    
}

export default LoginReducer;
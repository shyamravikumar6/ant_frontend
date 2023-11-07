import {  createContext, useReducer } from "react";
import LoginReducer from "../reducers/login";
export const LoginContext = createContext({});

export const LoginContextWrapper=({children})=>
{
  const [login,dispatch]=useReducer(LoginReducer,{})
return(

   <LoginContext.Provider value={{login,dispatch}}>
    {children}
  </LoginContext.Provider>
)
};
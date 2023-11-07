import React, { useMemo, useState } from "react";
import { createContext } from "react";
import LayoutView from "../module/LayoutView";
import { useReducer } from "react";
import Users from "../reducers/users";


export const UserContext = createContext({});

export const UserContextWrapper=()=>{
  const [loading,setLoading]=useState(true);
const [users,dispatch]= useReducer(Users,[]);
 const memoObject = useMemo(()=>({
  users,
  dispatch,
  loading,
  setLoading
 }),[users,loading])
return(

   <UserContext.Provider value={memoObject}>
     <LayoutView />
  </UserContext.Provider>
);
}
import React, { useState } from "react";
import UserContext from "./UserContext";
import Login from "../components/Login";
import Profile from "../components/Profile";

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null)
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        <Login />
        <Profile />
    </UserContext.Provider>
)
}
export default UserContextProvider;
import React, {createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
const [isAuth,setIsAuth] =useState(false)
const [token,setToken] = useState("");

const login = (token) =>{
   setIsAuth(true)
   setToken(token)
}


const Logout =()=>{
    setIsAuth(false)
    setToken("")
}


const toggleAuth = () =>{
    setIsAuth(isAuth === true ? false : true)
}
    return <AuthContext.Provider value={{isAuth,login,token,Logout,toggleAuth}}>{children}</AuthContext.Provider>
}
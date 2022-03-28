import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Button } from './Navbar'

export const Login = () => {
    const {login,token,toggleAuth,isAuth} = useContext(AuthContext)
    
    
    const handleLogin = () =>{
        fetch('https://reqres.in/api/login',{
            method: 'POST',
            body: JSON.stringify({
                email:"eve.holt@reqres.in",
                password:"cityslicka",
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
        .then((res) => login(res.token))
    } 

  return (
    <div>
        <Button onClick={handleLogin}>{
            isAuth ? "Logout":"Login"
        }</Button>

        <Button onClick={toggleAuth}>Toggle Auth</Button>
        {
            isAuth === true ? <h1>token:{token} </h1> : <h1>token:null</h1>
        }
    </div>
  )
}


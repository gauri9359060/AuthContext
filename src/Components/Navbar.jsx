import React from 'react'
import styled from 'styled-components'
import { Login } from './Login'


export const Button = styled.button`
    background-color:teal;
    padding:20px;
    color:white;
    border:none;
    border-radius:10px;
    margin:50px;
`
const NavbarWrapper = styled.nav`
    display:flex;
    height:100px;
    background-color:tranparent;
    justify-content:center;
    
`
const Navbar = () => {
  return (
    <NavbarWrapper>
       <Login/>
    </NavbarWrapper>
  )
}

export  {Navbar}
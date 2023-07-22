import React, { useState } from 'react'
import Navbar from './Navbar'
import HeaderComponent from './HeaderComponent'
import Register from '../../Pages/Authorization/Register'
import Login from '../../Pages/Authorization/Login'
export default function Header() {

  const [registerClass , setRegister] = useState('none')
  const [loginClass , setLogikn ] = useState('none')
  function addREgister(){
    setRegister('blockPage')
  }
  
  return (
    <div className='Header'>
      <Navbar />
      <HeaderComponent addREgister={addREgister}/>
      <Register registerClass={registerClass} setRegister={setRegister} loginClass={loginClass} setLogikn={setLogikn}/>
      <Login loginClass={loginClass} setLogikn={setLogikn} registerClass={registerClass} setRegister={setRegister}/>
    </div>
  )
}

import React, { useState } from 'react'
import Navbar from './Navbar'
import HeaderComponent from './HeaderComponent'
import Register from '../../Pages/Authorization/Register'
import Login from '../../Pages/Authorization/Login'
import Verify from '../../Pages/Authorization/Verify'
import MobilKatalog from './MobilKatalog'
export default function Header() {

  const [registerClass, setRegister] = useState('none')
  const [loginClass, setLogikn] = useState('none')
  const [verifyClass, setVerify] = useState('none')
  const user = JSON.parse(localStorage.getItem('user'))
  function addREgister() {

    {
      user ?
        setRegister('none')
        :
        setRegister('blockPage')
    }
  }

  return (
      <div className='Header'>
        <Navbar />
        <HeaderComponent addREgister={addREgister} />
        <Register registerClass={registerClass} setRegister={setRegister} setLogikn={setLogikn} setVerify={setVerify} />
        <Login loginClass={loginClass} setLogikn={setLogikn} setRegister={setRegister} setVerify={setVerify} />
        <Verify verifyClass={verifyClass} setVerify={setVerify} setRegister={setRegister} setLogikn={setLogikn} />
        <MobilKatalog addREgister={addREgister} />
      </div>

  )
}

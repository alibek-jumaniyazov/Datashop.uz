import axios from 'axios';
import React, { useState } from 'react';

const Login = ({ loginClass, setLogikn, setRegister, setVerify }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function closeLogin() {
    setLogikn('none')
  }

  function openReg() {
    setLogikn('none')
    setRegister('blockPage')
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert('Iltimos, foydalanuvchi nomi va parolni kiriting');
      return;
    }

    const body = {
      email,
      password
    }

    // Login logikasi
    console.log('Foydalanuvchi nomi va parol:', body);
    // Bu erda API ga ma'lumotlarni yuborish yoki serverga POST qilishni qo'shishingiz mumkin
    const RequestLogin = async () => {
      try {
        const response = await axios.post("http://localhost:9060/api/v1/auth/login", body)
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        setVerify('none')
        setRegister('none')
        setLogikn('none')
      }
      catch (error) {
        console.log(error);
      }
    }

    RequestLogin()
  };

  return (
    <div className={loginClass}>
      <div className='Register'>
        <h1>Kirish</h1>
        <form onSubmit={handleSubmit} className='inputsFrom'>
          <div className='inputFrom'>
            <label htmlFor="email">Name</label>
            <div className="registerInput">
              <i className="fa-regular fa-user" style={{ color: "#85878a" }}></i>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Email'
              />
            </div>
          </div>
          <div className='inputFrom'>
            <label htmlFor="password">Parol</label>
            <div className="registerInput">
              <i className="fa-solid fa-lock" style={{ color: "#85878a" }}></i>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='******'
              />
            </div>
          </div>
          <hr />
          <p className='loginAddPageText'>Ro'yhatdan o'tmaganmisiz? <span href="" onClick={() => openReg()}>Ro'yhatdan o'ting</span> </p>
          <button type="submit">Kirish</button>
        </form>
        <i className="fa-solid fa-x" style={{ color: "#0000000", fontSize: "30ppx" }} onClick={() => closeLogin()}></i>
      </div>
    </div>
  )
};

export default Login;


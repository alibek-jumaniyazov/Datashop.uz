import axios from 'axios';
import React, { useState } from 'react';

const Login = ({loginClass, setLogikn, setRegister, setVerify}) => {
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
        localStorage.setItem('password', JSON.stringify(password))
        localStorage.setItem('token', JSON.stringify(response.data.token))
        console.log(response.data);
        setVerify('none')
        setRegister('none')
        setLogikn('none')
      }
      catch (error) {
        alert('Parol yoki Email xato')
      }
    }

    RequestLogin()
  };
  const [inputType, setInputType] = useState('password')

  function openPassword(){
    if(inputType == 'password'){
      setInputType('text')
    }
    if(inputType == 'text'){
      setInputType('password')
    }
    
  }
  return (
    <div className={loginClass}>
      <div className='Register'>
        <h1>Kirish</h1>
        <form onSubmit={handleSubmit} className='inputsFrom'>
          <div className='inputFrom'>
            <label htmlFor="email">Name</label>
            <div className="registerInput">
              <i className="fa-regular fa-user"></i>
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
              <i className="fa-solid fa-lock"></i>
              <input
                type={inputType}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='******'
              />
              <i onClick={() => openPassword()} className="fa-solid fa-eye" ></i>

            </div>
          </div>
          <hr />
          <p className='loginAddPageText'>Ro'yhatdan o'tmaganmisiz? <span href="" onClick={() => openReg()}>Ro'yhatdan o'ting</span> </p>
          <button type="submit">Kirish</button>
        </form>
        <i className="fa-solid fa-x"  onClick={() => closeLogin()}></i>
      </div>
    </div>
  )
};

export default Login;


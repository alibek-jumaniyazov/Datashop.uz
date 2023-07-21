import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert('Iltimos, foydalanuvchi nomi va parolni kiriting');
      return;
    }

    // Login logikasi
    console.log('Foydalanuvchi nomi va parol:', {
      username,
      password
    });
    // Bu erda API ga ma'lumotlarni yuborish yoki serverga POST qilishni qo'shishingiz mumkin
    // axios.post('API_ENDPOINT', { username, password })
    //   .then(response => {
    //     console.log('Muvaffaqiyatli kirildingiz!', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Kirishda xatolik yuz berdi:', error);
    //   });
  };

  return (
    <div className='blockPage'>
      <div className='Register'>
        <h1>Kirish</h1>
        <form onSubmit={handleSubmit} className='inputsFrom'>
          <div className='inputFrom'>
            <label htmlFor="username">Name</label>
            <div className="registerInput">
              <i className="fa-regular fa-user" style={{ color: "#85878a" }}></i>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder='User name'
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
          <p className='loginAddPageText'>Ro'yhatdan o'tmaganmisiz? <a href="">Ro'yhatdan o'ting</a> </p>
          <button type="submit">Kirish</button>
        </form>
      </div>
      <i className="fa-solid fa-x" style={{ color: "#0000000", fontSize: "30ppx" }}></i>
    </div>
  )
};

export default Login;


import { useState } from 'react'
export default function Register({registerClass ,setRegister , loginClass ,setLogikn}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function closeRegister(){
    setRegister('none')
  }

  function openLogin() {
    setLogikn('blockPage')
    setRegister('none')
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      alert('Iltimos, hamma maydonlarni to\'ldiring');
      return;
    }

    if (password.length < 6) {
      alert('Parol kamida 6 belgidan iborat bo\'lishi kerak');
      return;
    }

    // Ro'yhatdan o'tish logikasi
    console.log('Ro\'yhatdan o\'tish ma\'lumotlari:', {
      name,
      email,
      password
    });
    // Bu erda API ga ma'lumotlarni yuborish yoki serverga POST qilishni qo'shishingiz mumkin
    // axios.post('API_ENDPOINT', { name, email, password })
    //   .then(response => {
    //     alert('Muvaffaqiyatli ro\'yhatdan o\'tdingiz!', response.data);
    //   })
    //   .catch(error => {
    //     alert('Ro\'yhatdan o\'tishda xatolik yuz berdi:', error);
    //   });
  };
  return (
    <div className={registerClass}>
      <div className='Register'>
        <h1>Вход / Регистрация</h1>
        <form onSubmit={handleSubmit} className='inputsFrom'>
          <div className='inputFrom'>
            <label htmlFor="name" >Ism</label>
            <div className="registerInput">
              <i className="fa-regular fa-user" style={{ color: "#85878a" }}></i>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder='Name'
              />
            </div>

          </div>
          <div className='inputFrom'>
            <label htmlFor="email">Email</label>
            <div className="registerInput">
            <i className="fa-regular fa-envelope" style={{ color: "#85878a" }}></i>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='example@gmail.com'
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
                placeholder='*********'
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
                placeholder='*********'
              />
            </div>
          </div>
          <hr />
          <p className='loginAddPageText'>У меня есть аккаунт <span href="" onClick={() => openLogin()}>Login</span> </p>
          <button type="submit">Ro'yhatdan o'tish</button>
        </form>
      </div>
      <i class="fa-solid fa-x" style={{ color: "#0000000" ,fontSize:"30ppx"  }} onClick={() => closeRegister()}></i>
    </div>
  )
}

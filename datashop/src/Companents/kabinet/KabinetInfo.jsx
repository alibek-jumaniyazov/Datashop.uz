import React, { useState } from 'react';
import Logout from '../../Pages/Authorization/Logout';
import axios from 'axios';

export default function KabinetInfo({ kabinetCom }) {
  const verificationIdFromLocalStorage = JSON.parse(localStorage.getItem('user'));
  const userPassword = JSON.parse(localStorage.getItem('password'));

  const [user, setUser] = useState({
    name: verificationIdFromLocalStorage.user.name,
    surname: verificationIdFromLocalStorage.user.surname,
    phone: verificationIdFromLocalStorage.user.phone,
    email: verificationIdFromLocalStorage.user.email,
    address: verificationIdFromLocalStorage.user.address,
    password:  userPassword,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const body = {
      name: user.name,
      surname: user.surname,
      phone: user.phone.toString(),
      email: user.email,
      address: user.address,
      password: user.password,
    };
    
    const url = `http://localhost:9060/api/v1/user/${verificationIdFromLocalStorage.user.id}`

    const token = verificationIdFromLocalStorage.token

    console.log(body);
    try {
      const request = await axios.put(url, body, {
        headers: {
          Authorization:  token,
        },
      });
      console.log(request.data);
      

      localStorage.setItem('user', JSON.stringify({token: token, user: request.data.user}))
      localStorage.setItem('password' , JSON.stringify(body.password))
    } catch (err) {
      console.log(err);
    }
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
    <div className={kabinetCom.info}>
      <div className="blockInputs">
        <h1>Информация о пользователе</h1>
        <div className="lnputs">
          <div className="inputTitle">
            <p>Телефон номер</p>
            <input
              type="text"
              name="phone"
              value={user.phone}
              placeholder="Телефон номер"
              className="allWidth"
              onChange={handleChange}
            />      
          </div>
          <div className="inputTitle">
            <p>Имя</p>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Имя"
              className="smallWidth"
              onChange={handleChange}
            />
          </div>
          <div className="inputTitle">
            <p>Фамилия</p>
            <input
              type="text"
              name="surname"
              value={user.surname}
              placeholder="Фамилия"
              className="smallWidth"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="blockInputs">
        <h1>Информация об учетной записи пользователя</h1>
        <div className="lnputs">
          <div className="inputTitle">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              className="allWidth"
              onChange={handleChange}
            />
          </div>
          <div className="inputTitle">
            <p>Пароль</p>
            <div className="inputPassword">
               <input
              type={inputType}
              name="password"
              value={user.password}
              placeholder="*********"
              className="smallWidth"
              onChange={handleChange}
              
            />
            <i onClick={() => openPassword()} class="fa-solid fa-eye" style={{color:" #000000;"}}></i>
            </div>
           
            
          </div>
        </div>
      </div>
      <div className="blockInputs">
        <h1>Адрес доставки</h1>
        <div className="lnputs">
          <div className="inputTitle">
            <p>Полный адрес</p>
            <input
              type="text"
              name="address"
              value={user.address}
              placeholder="Введите полный адрес"
              className="allWidth"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleSave}>Сохранить</button>
      <Logout />
    </div>
  );
}

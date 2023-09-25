import React, { useState, useEffect, useRef } from 'react';
import Logout from '../../Pages/Authorization/Logout';
import axios from 'axios';

export default function KabinetInfo({ kabinetCom }) {
  const verificationIdFromLocalStorage = JSON.parse(localStorage.getItem('user'));

  const phoneNumberRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullAddressRef = useRef();


  const handleSave = async () => {
  const body = {
    name: nameRef.current.value,
    surname: surnameRef.current.value,
    phone: phoneNumberRef.current.value,
    email: emailRef.current.value,
    address: fullAddressRef.current.value,
    password: "12345678"
  }
    console.log(body);
    try {
      const response = await axios.put(`http://localhost:9060/api/v1/user/${verificationIdFromLocalStorage.user.id}`, body, {
        headers: {
          Authorization: "Bearer " + verificationIdFromLocalStorage.token,
        }
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={kabinetCom.info}>
      <div className="blockInputs">
        <h1>Информация о пользователе</h1>
        <div className="lnputs">
          <div className="inputTitle">
            <p>Телефон номер</p>
            <input
              type="text"
              name="phoneNumber"
              defaultValue={verificationIdFromLocalStorage.user.phone}
              ref={phoneNumberRef} // Ref ni inputga bog'lash
              placeholder="Телефон номер"
              className="allWidth"
            />
          </div>
          <div className="inputTitle">
            <p>Имя</p>
            <input
              type="text"
              name="name"
              defaultValue={verificationIdFromLocalStorage.user.name}
              ref={nameRef} // Ref ni inputga bog'lash
              placeholder="Имя"
              className="smallWidth"
            />
          </div>
          <div className="inputTitle">
            <p>Фамилия</p>
            <input
              type="text"
              name="surname"
              defaultValue={verificationIdFromLocalStorage.user.surname}
              ref={surnameRef} // Ref ni inputga bog'lash
              placeholder="Фамилия"
              className="smallWidth"
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
              defaultValue={verificationIdFromLocalStorage.user.email}
              ref={emailRef} // Ref ni inputga bog'lash
              placeholder="Email"
              className="allWidth"
            />
          </div>
          <div className="inputTitle">
            <p>Пароль</p>
            <input
              type="password"
              name="password"
              defaultValue={"12345678"}
              ref={passwordRef} // Ref ni inputga bog'lash
              placeholder="*********"
              className="smallWidth"
            />
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
              name="fullAddress"
              defaultValue={verificationIdFromLocalStorage.user.address}
              ref={fullAddressRef} // Ref ni inputga bog'lash
              placeholder="Введите полный адрес"
              className="allWidth"
            />
          </div>
        </div>
      </div>
      <button onClick={handleSave}>Сохранить</button>
      <Logout />
    </div>
  );
}

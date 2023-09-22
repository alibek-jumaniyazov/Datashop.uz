import React, { useState, useEffect } from 'react';

export default function KabinetInfo({ kabinetCom }) {
  const [user, setUser] = useState({
    phoneNumber: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    region: 'Urganch', // Avvalgi regionni o'rnating
    city: 'Xorazm', // Avvalgi shaharni o'rnating
    fullAddress: '',
  });

  const verificationIdFromLocalStorage = JSON.parse(localStorage.getItem('verifyId'));

  useEffect(() => {
    if (verificationIdFromLocalStorage && verificationIdFromLocalStorage.user) {
      setUser(verificationIdFromLocalStorage.user);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Ma'lumotlarni yuborishni ushbu funksiya orqali amalga oshiring
    // Misol uchun axios yoki fetch ishlatishingiz mumkin
    console.log('Saqlash kerak bo\'lgan ma\'lumotlar:', user);
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
              value={user.phoneNumber}
              placeholder="Телефон номер"
              className="allWidth"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              className="allWidth"
              onChange={handleInputChange}
            />
          </div>
          <div className="inputTitle">
            <p>Пароль</p>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="*********"
              className="smallWidth"
              onChange={handleInputChange}
            />
          </div>
          <div className="inputTitle">
            <p>Подтвержедение Пароля</p>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              placeholder="*********"
              className="smallWidth"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="blockInputs">
        <h1>Адрес доставки</h1>
        <div className="lnputs">
          <div className="inputTitle">
            <p>Область</p>
            <select
              name="region"
              value={user.region}
              className="smallWidth"
              onChange={handleSelectChange}
            >
              <option value="Urganch">Urganch</option>
              <option value="Xonqa">Xonqa</option>
              <option value="Yangi Ariq">Yangi Ariq</option>
              <option value="Shovot">Shovot</option>
              <option value="Qo'shkopir">Qo'shkopir</option>
            </select>
          </div>
          <div className="inputTitle">
            <p>Город</p>
            <select
              name="city"
              value={user.city}
              className="smallWidth"
              onChange={handleSelectChange}
            >
              <option value="Xorazm">Xorazm</option>
              <option value="Xonqa">Xonqa</option>
              <option value="Yangi Ariq">Yangi Ariq</option>
              <option value="Shovot">Shovot</option>
              <option value="Qo'shkopir">Qo'shkopir</option>
            </select>
          </div>
          <div className="inputTitle">
            <p>Полный адрес</p>
            <input
              type="text"
              name="fullAddress"
              value={user.fullAddress}
              placeholder="Введите полный адрес"
              className="allWidth"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
}

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';
import axios from 'axios';

export default function UserPage() {
  const { id } = useParams();

  const { users } = useContext(UserContext);

  const user = users.find(u => u.id === parseInt(id));

  const url = `http://localhost:9060/api/v1/user/${user.id}`
  const urlRole = `http://localhost:9060/api/v1/user/role/${user.id}`
  const token = JSON.parse(localStorage.getItem('token'));

  const [userRole, setUserRole] = useState(user.role)
  console.log(user);

  if (!user) {
    return <p>Foydalanuvchi topilmadi</p>;
  }

  const [userValue, setUser] = useState({
    name: user.name,
    surname: user.surname,
    phone: user.phone,
    email: user.email,
    address: user.address,
    // password: userPassword,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...userValue,
      [name]: value,
    });
  };

  const handleChangeRole = (e) => {
    setUserRole(e.target.value)
  };

  const handleSave = async () => {
    const body = {
      name: userValue.name,
      surname: userValue.surname,
      phone: userValue.phone,
      email: userValue.email,
      address: userValue.address,
      password: userValue.password,
    };

    try {
      const request = await axios.put(url, body, {
        headers: {
          Authorization: token,
        },
      });

      localStorage.setItem('user', JSON.stringify({ token: token, user: request.data.user }))

    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveRole = async () => {
    const body = {
      role: userRole
    }
    console.log(body);
    try {
      const request = await axios.put(urlRole, body, {
        headers: {
          Authorization: token,
        }
      });
      setUserRole(request.data.user.role)
      console.log(request.data);

    } catch (err) {
      console.log(err);

    }
  }



  return (
    <div className='UserPageInfo'>
      <div className="KabinetInfo">
        <div className="blockInputs">
          <h1>Информация о пользователе</h1>
          <div className="lnputs">
            <div className="inputTitle">
              <p>Телефон номер</p>
              <input
                type="text"
                name="phone"
                value={userValue.phone}
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
                value={userValue.name}
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
                value={userValue.surname}
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
                value={userValue.email}
                placeholder="Email"
                className="allWidth"
                onChange={handleChange}
              />
            </div>
            {/* <div className="inputTitle">
            <p>Пароль</p>
            <div className="inputPassword">
              <input
                type={inputType}
                name="password"
                value={userValue.password}
                placeholder="*********"
                className="smallWidth"
                onChange={handleChange}

              />
              <i onClick={() => openPassword()} className="fa-solid fa-eye" ></i>
            </div>


          </div> */}
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
                value={userValue.address}
                placeholder="Введите полный адрес"
                className="allWidth"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button onClick={handleSave}>Сохранить</button>
      </div>
      <div className="KabinetInfo">
        <div className="blockInputs">
          <h1>User Role</h1>
          <div className="lnputs">
            <select value={userRole} onChange={handleChangeRole}>
              <option value="user">user</option>
              <option value="admin">admin</option>
              <option value="supervisor">supervisor</option>
            </select>
          </div>
        </div>
        <button onClick={handleSaveRole}>Сохранить</button>
      </div>
    </div>
  );
}

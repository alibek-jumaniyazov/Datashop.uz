import React, { useContext } from 'react';
import {  Outlet, useParams } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';

export default function UserPage() {
  const { id } = useParams(); 

  const { users } = useContext(UserContext); 

  const user = users.find(user => user.id === id);

  if (!user) {
    return <p>Foydalanuvchi topilmadi</p>;
  }

  return (
    <div>
      <div>
        <h2>Foydalanuvchi ma'lumotlari</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Phone: {user.phone}</p>
      </div>
    <Outlet/>

    </div>
  );
}

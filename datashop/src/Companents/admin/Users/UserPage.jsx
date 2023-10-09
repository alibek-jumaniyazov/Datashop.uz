import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const userToken = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {
    const UserInfoId = async () => {
      try {
        const response = await axios.get(`http://localhost:9060/api/v1/user/:${id}`, {
          headers: {
            Authorization: userToken
          }
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    UserInfoId();
  }, [id]);
  console.log(userData);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Foydalanuvchi ma'lumotlari</h2>
          <p>Name: {userData.name}</p>
          {/* Boshqa foydalanuvchi ma'lumotlarini qo'shing */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

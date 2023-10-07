import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function CreateUser() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Ma'lumotlarni inputlardan o'chirish
    setUserData({
      name: '',
      surname: '',
      phone: '',
      address: '',
      email: '',
      password: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Foydalanuvchi ma'lumotlarini serverga post qilish
    fetch('server_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Post qilish muvaffaqiyatli bo'lsa, ma'lumotlarni konsolga chiqarish
        console.log(data);
        // Modalni yopish
        closeModal();
      })
      .catch((error) => {
        console.error('Serverga so\'rovni jo\'natishda xato:', error);
        // Modalni yopish
        closeModal();
      });
  };

  return (
    <div>
      <Button onClick={openModal} colorScheme='red' size='lg'>
        + Create User
      </Button>
      {modalOpen && (
        <div className="modall">
          <div className="modal-content">
            <div className="AddClose">
              <h2>Foydalanuvchi qo'shish</h2>
              <button onClick={closeModal}>&times;</button>
            </div>
            <div className="ModalInputs">
            <input
                type="text"
                name="name"
                placeholder="Ism"
                value={userData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="surname"
                placeholder="Familiya"
                value={userData.surname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefon"
                value={userData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Manzil"
                value={userData.address}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Parol"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>
            <Button w={'100%'} marginTop={"20px"} onClick={handleSubmit} colorScheme='red' variant='outline'>
              Saqlash
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateUser;

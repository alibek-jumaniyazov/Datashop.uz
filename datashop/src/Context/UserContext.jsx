// UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { getUserData, } from './api';
import { getUsers, } from './api';
import img1 from '../images/laptopa.png'
import img2 from '../images/laptop.png'

// getUserProduct
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [category, setCategory] = useState([
    {
      id: 1,
      title: 'Ноутбуки',
      image: img2,
    }
  ]);
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);
  const [stateContext, setState] = useState([])
  const [fakeProduct, setFakeProduct] = useState([
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
    {
      id: 1,
      image: img1,
      description: " HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000',
      type: 'Notebook'
    },
  ])


  useEffect(() => {
    // const GetApi = async () => {
    //   const userData = await getUserData();
    //   setCategory(userData.category);
    // };

    // const GetProduct = async () => {
    //   const userDataProduct = await getUserProduct();
    //   setProduct(userDataProduct.product);
    // };

    // GetProduct();
    // GetApi();

    const GetUsers = async () => {
      const usersInfo = await getUsers();
      setUsers(usersInfo.user)
    }

    GetUsers()

  }, []);

  const values = {
    category,
    fakeProduct,
    stateContext,
    setState,
    users
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

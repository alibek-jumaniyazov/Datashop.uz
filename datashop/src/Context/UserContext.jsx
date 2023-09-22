// UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { getUserData ,  } from './api';
import img1 from '../images/laptopa.png'

// getUserProduct
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [stateContext , setState] = useState([])
  const [fakeProduct , setFakeProduct] = useState([
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
    {
      id: 1,
      image: img1,
      description:" HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..",
      price: '14.540.000', 
    },
  ])


  useEffect(() => {
    const GetApi = async () => {
      const userData = await getUserData();
      setCategory(userData.category);
    };

    // const GetProduct = async () => {
    //   const userDataProduct = await getUserProduct();
    //   setProduct(userDataProduct.product);
    // };

    // GetProduct();
    GetApi();

  
  }, []);

  const values = {
    category,
    fakeProduct,
    stateContext , 
    setState
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

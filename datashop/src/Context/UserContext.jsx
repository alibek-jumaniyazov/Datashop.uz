// UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { getUserData , getUserProduct } from './api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const GetApi = async () => {
      const userData = await getUserData();
      setCategory(userData.category);
    };

    const GetProduct = async () => {
      const userDataProduct = await getUserProduct();
      setProduct(userDataProduct.product);
    };

    GetProduct();
    GetApi();

    
  }, []);

  const values = {
    category,
    product
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

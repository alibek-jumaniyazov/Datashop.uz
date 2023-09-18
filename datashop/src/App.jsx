import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'
import Home from './Pages/Home'
import axios from 'axios';
import { UserProvider } from './Context/UserContext.jsx'
import Admin from './AdminPanel/Admin'
import ProductInfo from './Pages/ProductInfo'
import Karzinka from './Pages/Karzinka'
import Kabinet from './Pages/Kabinet'
import Order from './Pages/Order'
// import Register from './Pages/Authorization/Register'
// import Login from './Pages/Authorization/Login'

function App() {
  const navigate = useNavigate();

  return (
    <UserProvider>
      <div className='App'>
        <Header />
        
        <div className="fakeHeader"></div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<ProductInfo />} />
            <Route path='/savat' element={<Karzinka />} />
            <Route path='/kabinet' element={<Kabinet />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

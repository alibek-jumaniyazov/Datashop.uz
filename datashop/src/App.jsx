import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, redirect, Navigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'
import Home from './Pages/Home'
import axios from 'axios';
import { UserProvider } from './Context/UserContext.jsx'
import Admin from './AdminPanel/Admin'
import ProductInfo from './Pages/ProductInfo'
import Karzinka from './Pages/Karzinka'
// import Register from './Pages/Authorization/Register'
// import Login from './Pages/Authorization/Login'
function App() {


  return (
    <UserProvider>
      <Routes>
        <Route path='admin' element={<Admin />} />
      </Routes>
      <div className='App'>
        <Header />
        <div className="fakeHeader"></div>
        {/* <div className="container">
          <Routes>
            <Route exact  path='/' element={<Home />} />
            <Route exact  path='product' element={<ProductInfo />} />
            <Route exact  path='savat' elemen={} />
          </Routes>
        </div> */}
        <Karzinka/>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

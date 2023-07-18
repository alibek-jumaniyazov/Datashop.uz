import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, redirect, Navigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'
import Home from './Pages/Home'
import axios from 'axios';
import { UserProvider } from './Context/UserContext.jsx'
import Admin from './AdminPanel/Admin'
import ProductInfo from './Pages/ProductInfo'
function App() {





  return (
    <UserProvider>
      <Routes>
        <Route path='admin' element={<Admin />} />
      </Routes>
      <div className='App'>
        <Header />
        <div className="fakeHeader"></div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='product' element={<ProductInfo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

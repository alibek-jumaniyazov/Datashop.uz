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
  
  const [page , setPage] = useState([])
  const [addKazinka , setAddKarzinka] = useState([])

  return (
    <UserProvider>
      <div className='App'>
        <Header />
        <div className="fakeHeader"></div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home setPage={setPage}/>} />
            <Route path='/product' element={<ProductInfo page={page} setAddKarzinka={setAddKarzinka}/>} />
            <Route path='/savat' element={<Karzinka addKazinka={addKazinka}/>} />
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

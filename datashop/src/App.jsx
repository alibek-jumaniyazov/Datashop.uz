import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'
import Home from './Pages/Home'
import axios from 'axios';
import { UserProvider } from './Context/UserContext.jsx'
import Admin from './AdminPanel/AdminPage'
import ProductInfo from './Pages/ProductInfo'
import Karzinka from './Pages/Karzinka'
import Kabinet from './Pages/Kabinet'
import Order from './Pages/Order'
import Login from './Pages/Authorization/Login'
import AdminPage from './AdminPanel/AdminPage'
// import Register from './Pages/Authorization/Register'
// import Login from './Pages/Authorization/Login'

function App() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user')) ||
  {
    user: {
      role: 'user'
    }
  };

  console.log(user);

  const [page, setPage] = useState([])
  const [addKazinka, setAddKarzinka] = useState([])

  useEffect(() => {
    if (user.user.role != 'admin' && user.user.role != 'supervisor') {
      navigate('/')
    }
  }, [])

  return (
    <UserProvider>
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <div className='App'>
        <Header />
        <div className="fakeHeader"></div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home setPage={setPage} />} />
            <Route path='/product' element={<ProductInfo page={page} setAddKarzinka={setAddKarzinka} />} />
            <Route path='/savat' element={<Karzinka addKazinka={addKazinka} />} />
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

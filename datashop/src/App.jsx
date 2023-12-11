import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'
import Home from './Pages/Home'
import { UserProvider } from './Context/UserContext.jsx'
import ProductInfo from './Pages/ProductInfo'
import Karzinka from './Pages/Karzinka'
import Kabinet from './Pages/Kabinet'
import Order from './Pages/Order'
import Error from './Pages/Error'
import AdminPage from './AdminPanel/AdminPage'

function App() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user')) || { user: { role: 'admin' } };

  const [page, setPage] = useState([])
  const [addKazinka, setAddKarzinka] = useState([])


  return (
    <UserProvider>
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
            {(user.user.role === 'admin' || user.user.role === 'supervisor') && (
              <Route path='admin/*' element={<AdminPage />} />
            )}
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App

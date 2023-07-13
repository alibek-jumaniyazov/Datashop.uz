import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, redirect, Navigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'
import Home from './Pages/Hame'

function App() {

  return (
    <div className='App'>
      <Header/>
      <div className="fakeHeader">sdfsgefa</div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, redirect, Navigate } from 'react-router-dom'
import Header from './Companents/header/Header'
import Footer from './Companents/footer/Footer'

function App() {

  return (
    <div className='App'>
      <Header/>
        <div className="container">
          <Routes>
            
          </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App

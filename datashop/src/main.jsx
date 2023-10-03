import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './styles/style.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/main.css'
import './styles/product.css'
import './styles/admin.css'
import './styles/user.css'
import './styles/karzinka.css'
import './styles/order.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
)

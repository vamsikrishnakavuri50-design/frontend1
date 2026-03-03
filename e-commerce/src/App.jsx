import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'  
import Feedback from './components/Feedback.jsx'
import Product from './components/Product.jsx'
import { BrowserRouter } from 'react-router-dom'
import Cart from './components/cart.jsx'


function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header  />
      <MainContent />
      </BrowserRouter>
      <Footer  /> 
      
    </div>
  )
}

export default App
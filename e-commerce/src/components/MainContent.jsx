import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feedback from './Feedback'
import Product from './Product'
import Signin from './Signin'
import Signup from './Signup'
import Admin from './Admin'
import Contactus from './Contactus'
import Cart from './cart'

function MainContent() {
  return (
    <div className="main-content common">
    
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/products" element={<Product />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      
     
    </div>
  )
}

export default MainContent


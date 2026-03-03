import React from 'react'
import '../App.css'
import logo from '/image/e-commerce.png'
import Navlinks from './Navlinks'
import Product from './Product'
import Feedback from './Feedback'

function Header() {
  return (
    <div className="header common">
      <Navlinks />
      <img src = {logo} alt = "logo"/>
      <p>KLU Store</p>
    </div>
  )
}

export default Header


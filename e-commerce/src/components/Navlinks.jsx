import React from 'react'

function Navlinks() {
    function toggleMenuStyle() {
        const menu = document.querySelector('.system-menu');
        menu.classList.toggle('mobile-menu');
        console.log(menu.classList);
    }
  return (
    
    <div className="navlinks">
        <div onClick={toggleMenuStyle} className="menu-icon">&#9776;</div>
        <ul className="system-menu">
            <li><a href="/signin">Signin</a></li>
            <li><a href="/signup">signup</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="/contact us">Contact Us</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>

    </div>
  )
}

export default Navlinks
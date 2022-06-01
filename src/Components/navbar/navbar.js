import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar_container'>
        <div className="logo">
           <h2>TESLA</h2>
        </div>
        <div className="models">
            <h2>Model S</h2>
            <h2>Model 3</h2>
            <h2>Model X</h2>
            <h2>ModelY</h2>
            <h2>Solar Roof</h2>
            <h2>Solar Panels</h2>
        </div>
        <div className="right_menu">
        <h2>Shop</h2>
            <h2>Account</h2>
            <h2>Menu</h2>

        </div>

    </div>
  )
}

export default Navbar
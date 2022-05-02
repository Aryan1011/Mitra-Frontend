import React from 'react'
import logo from '../assets/images/mitraBlackLogo.png';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
      <>
        <div className='navbarTopBox'>
        </div>

        <div className='navbar'>
            <Link to="/">
            <div className='navbarLogo'>
                <img src={logo} alt="" />
            </div>
            </Link>
            <div className='navbarItems'>
                <ul >
                <Link to="/about"> 
                  <li>About Us</li>
                  </Link>
                  <Link to="/contact"> 
                  <li>Contact Us</li>
                  </Link>

                  <Link to="/impact"> 
                  <li>Impact Us</li>
                  </Link>
                </ul>
            </div>
            <div className='navbarButtons'>
            <Link to="/signin"> 
                <button >Sign In</button>
            </Link>
            <Link to="/register"> 
                <button >Register</button>
            </Link>
            </div>

        </div>
      </>
  )
}

export default Navbar
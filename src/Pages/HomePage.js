import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Register from '../Components/Register';
import LoginForm from '../Components/LoginForm';

function HomePage() {
  return (
    <>
    <Navbar/>
    <Register/>
    <LoginForm/>
    </>
  )
}

export default HomePage
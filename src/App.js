import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import ImpactUs from './Pages/ImpactUs'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>

      <Routes>

      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/impact" element={<ImpactUs/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/signin" element={<SignIn/>} />
  
      </Routes>

      <Footer/>
    </>
  );
}

export default App;

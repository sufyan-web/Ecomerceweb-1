import React from 'react'
import { Routes, Route} from "react-router-dom";
import Banner from "../header/Banner"
import Navbar from '../header/Navbar';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import SignUp from '../pages/SignUp';


function PageRoutes() {
  return (
   <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
   </>
  )
}

export default PageRoutes
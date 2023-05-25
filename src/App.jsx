import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Contacts from './Pages/Contacts'
import Notfound from './Pages/Notfound'
import Navbar1 from './compounts/Navbar1'

export default function App() {
  return (
    
    <div>      
        <Navbar1/> 
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="*" element={<Notfound />} />

 </Routes>
 </div>
  )
}

import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <div>       
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contacts" element={<Contacts />} />
   
 </Routes>
 </div>
  )
}

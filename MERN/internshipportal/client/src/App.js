import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Oppurtunitieshome from './components/Oppurtunitieshome'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Oppurtunitieshome/>}/>
         <Route path ="/login" element={<Login/>}/>
         <Route path = "/signup" element={<Signup/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

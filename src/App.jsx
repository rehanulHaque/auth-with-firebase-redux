import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'
import ProtectedRoute from './guard/ProtectedRoute'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App

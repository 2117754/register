import React from 'react'
import Login from './login'
import Register from './register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home'



function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>    
    </BrowserRouter> 
  )
}
export default App
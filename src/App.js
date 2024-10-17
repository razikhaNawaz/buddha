import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Active from './Components/Active'
import Inactive from './Components/Inactive'
// import Counter from './Counter'

const App = () => {

  
  
  return (
   <>
     <Header />
     <Navbar />
     <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/active" element={<Products />}></Route>
      <Route path="/inactive" element={<Inactive />}></Route>
     </Routes>
     </>
  )
}

export default App
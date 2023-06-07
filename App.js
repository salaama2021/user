import React from 'react'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import Make from './Make'
import Home from './Home'
import Update from './Update'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/make' element={<make/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
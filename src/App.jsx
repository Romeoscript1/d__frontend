import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App


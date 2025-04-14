import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/upload" element={<FileUpload />} />
  </Routes>
  )
}

export default App

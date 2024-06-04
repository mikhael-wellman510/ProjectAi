import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from '../Pages/Navbar'
import Definition from '../Pages/Definition'
import Analytics from '../Pages/Analytics'
import Dashboard from '../Pages/Dashboard'
const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Definition />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter

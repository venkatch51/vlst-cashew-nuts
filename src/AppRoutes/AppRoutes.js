import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import PageNotFound from '../Pages/PageNotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />}/>
      <Route path='contactus' element={<ContactPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
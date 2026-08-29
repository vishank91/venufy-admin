import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/Authentication/LoginPage'
import SignupPage from './Pages/Authentication/SignupPage'
import ErrorPage from './Pages/Authentication/ErrorPage'
import PhoneVerificationPage from './Pages/Authentication/PhoneVerificationPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/verify-phone' element={<PhoneVerificationPage />} />

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

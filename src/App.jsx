import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from "./Pages/HomePage"

import ErrorPage from './pages/Authentication/ErrorPage'
import SignupPage from './pages/Authentication/SignupPage'
import LoginPage from './pages/Authentication/LoginPage'
import VerifyPhonePage from './pages/Authentication/VerifyPhonePage'
import VerifyEmailPage from './pages/Authentication/VerifyEmailPage'
import ForgotPasswordPage from './pages/Authentication/ForgotPasswordPage'
import ResetPasswordPage from './pages/Authentication/ResetPasswordPage'

import ProfilePage from './pages/Profile/ProfilePage'
import CreateProfilePage from './pages/Profile/CreateProfilePage'
import EditProfilePage from './pages/Profile/EditProfilePage'
import ChangePasswordPage from './pages/Profile/ChangePasswordPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Default */}
                <Route path="/" element={<HomePage/>} />


                {/* Authentication */}
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify-phone" element={<VerifyPhonePage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />

                {/* Vendor Profile */}
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/create" element={<CreateProfilePage />} />
                <Route path="/profile/edit" element={<EditProfilePage />} />
                <Route path="/change-password" element={<ChangePasswordPage />} />


                {/* 404 */}
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

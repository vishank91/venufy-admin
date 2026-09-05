import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import ErrorPage from './Pages/Authentication/ErrorPage'
import SignupPage from './Pages/Authentication/SignupPage'
import LoginPage from './Pages/Authentication/LoginPage'
import VerifyPhonePage from './Pages/Authentication/VerifyPhonePage'
import VerifyEmailPage from './Pages/Authentication/VerifyEmailPage'
import ForgotPasswordPage from './Pages/Authentication/ForgotPasswordPage'
import ResetPasswordPage from './Pages/Authentication/ResetPasswordPage'
import ProfilePage from './Pages/Profile/ProfilePage'
import CreateProfilePage from './Pages/Profile/CreateProfilePage'
import EditProfilePage from './Pages/Profile/EditProfilePage'
import ChangePasswordPage from './Pages/Profile/ChangePasswordPage'

function ProtectedRoute({ children }) {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" replace />
    }

    return children
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify-phone" element={<VerifyPhonePage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />

                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/profile/create" element={<ProtectedRoute><CreateProfilePage /></ProtectedRoute>} />
                <Route path="/profile/edit" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
                <Route path="/profile/change-password" element={<ProtectedRoute><ChangePasswordPage /></ProtectedRoute>} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

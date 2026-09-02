import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
    let [email, setEmail] = useState(localStorage.getItem("email") || "")
    let [loading, setLoading] = useState(false)
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")

    async function postSubmit(e) {
        e.preventDefault()
        setError("")
        setSuccess("")

        if (!email) {
            setError("Please enter your email address.")
            return
        }

        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Unable to send password reset link.")

            localStorage.setItem("email", email)
            setSuccess(data.message || "Password reset link sent successfully.")
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="authentication-wrapper authentication-cover authentication-bg">
            <div className="authentication-inner row">
                <div className="d-none d-lg-flex col-lg-7 p-0">
                    <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                        <img src="../../assets/img/illustrations/auth-forgot-password-illustration-light.png" alt="forgot-password" className="img-fluid my-5 auth-illustration" />
                        <img src="../../assets/img/illustrations/bg-shape-image-light.png" alt="background" className="platform-bg" />
                    </div>
                </div>

                <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
                    <div className="w-px-400 mx-auto">
                        <div className="app-brand mb-4">
                            <Link to="/" className="app-brand-link gap-2 text-dark fs-1">Venuefy</Link>
                        </div>

                        <h3 className="mb-1 fw-bold">Forgot Password? 🔒</h3>
                        <p className="mb-4">Enter your registered email address and we will send you a password reset link.</p>

                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        <form onSubmit={postSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    autoFocus
                                />
                            </div>

                            <button type="submit" disabled={loading} className="btn btn-primary d-grid w-100 mb-3">
                                {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                                {loading ? "Please wait..." : "Send Reset Link"}
                            </button>

                            <div className="text-center">
                                <Link to="/login">Back to Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

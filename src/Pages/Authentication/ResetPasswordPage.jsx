import React, { useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

export default function ResetPasswordPage() {
    let [searchParams] = useSearchParams()
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    let [showPassword, setShowPassword] = useState(false)
    let [showConfirmPassword, setShowConfirmPassword] = useState(false)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")
    let navigate = useNavigate()

    async function postSubmit(e) {
        e.preventDefault()
        setError("")
        setSuccess("")

        let token = searchParams.get("token")

        if (!token) {
            setError("Password reset token is missing or invalid.")
            return
        }

        if (!password || !confirmPassword) {
            setError("Please enter both password fields.")
            return
        }

        if (password !== confirmPassword) {
            setError("Password and confirm password do not match.")
            return
        }

        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token,
                    password
                })
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Unable to reset password.")

            setSuccess(data.message || "Password reset successfully.")

            setTimeout(() => {
                navigate("/login")
            }, 1500)
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
                        <img src="../../assets/img/illustrations/auth-reset-password-illustration-light.png" alt="reset-password" className="img-fluid my-5 auth-illustration" />
                        <img src="../../assets/img/illustrations/bg-shape-image-light.png" alt="background" className="platform-bg" />
                    </div>
                </div>

                <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
                    <div className="w-px-400 mx-auto">
                        <div className="app-brand mb-4">
                            <Link to="/" className="app-brand-link gap-2 text-dark fs-1">Venuefy</Link>
                        </div>

                        <h3 className="mb-1 fw-bold">Reset Password 🔒</h3>
                        <p className="mb-4">Enter your new password below.</p>

                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        <form onSubmit={postSubmit}>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <div className="input-group input-group-merge">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter new password"
                                    />
                                    <span className="input-group-text cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        <i className={showPassword ? "ti ti-eye" : "ti ti-eye-off"}></i>
                                    </span>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <div className="input-group input-group-merge">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="form-control"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                    />
                                    <span className="input-group-text cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        <i className={showConfirmPassword ? "ti ti-eye" : "ti ti-eye-off"}></i>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className="btn btn-primary d-grid w-100 mb-3">
                                {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                                {loading ? "Please wait..." : "Reset Password"}
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

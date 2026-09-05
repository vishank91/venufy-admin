import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")
    let [showPassword, setShowPassword] = useState(false)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")
    let navigate = useNavigate()

    async function postSubmit(e) {
        e.preventDefault()
        setError("")

        if (!login || !password) {
            setError("Please enter login and password.")
            return
        }

        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    login,
                    password,
                    role: "vendor",
                    accountType: "business"
                })
            })

            response = await response.json()
            if (response.result === "Fail") {
                throw new Error(response.message || response.reason || "Login failed.")
            }

            if (response?.data.token) localStorage.setItem("token", response?.data.token)
            if (response?.data.accessToken) localStorage.setItem("token", response?.data.accessToken)
            if (response?.data.refreshToken) localStorage.setItem("refreshToken", response?.data.refreshToken)
            if (response?.data.user) localStorage.setItem("user", JSON.stringify(response?.data.user))

            navigate("/")
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
                        <img src="../../assets/img/illustrations/auth-login-illustration-light.png" alt="auth-login-cover" className="img-fluid my-5 auth-illustration" />
                        <img src="../../assets/img/illustrations/bg-shape-image-light.png" alt="auth-login-cover" className="platform-bg" />
                    </div>
                </div>

                <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
                    <div className="w-px-400 mx-auto">
                        <div className="app-brand mb-4">
                            <Link to="/" className="app-brand-link gap-2 text-dark fs-1">Venuefy</Link>
                        </div>

                        <h3 className="mb-1 fw-bold">Welcome to Venuefy! 👋</h3>
                        <p className="mb-4">Please sign-in to your account and start the adventure</p>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={postSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email, Username or Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    placeholder="Enter your email, username or phone"
                                    autoFocus
                                />
                            </div>

                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <label className="form-label">Password</label>
                                    <Link to="/forgot-password"><small>Forgot Password?</small></Link>
                                </div>

                                <div className="input-group input-group-merge">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                    />
                                    <span className="input-group-text cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        <i className={showPassword ? "ti ti-eye" : "ti ti-eye-off"}></i>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className="btn btn-primary d-grid w-100">
                                {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                                {loading ? "Please wait..." : "Sign in"}
                            </button>
                        </form>

                        <p className="text-center mt-4">
                            <span>New on our platform? </span>
                            <Link to="/signup">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

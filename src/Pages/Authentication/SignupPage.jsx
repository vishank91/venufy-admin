import React from 'react'
import { Link } from 'react-router-dom'

export default function SignupPage() {
    return (
        <>
            <div className="authentication-wrapper authentication-cover authentication-bg">
                <div className="authentication-inner row">
                    {/*  Left Text  */}
                    <div className="d-none d-lg-flex col-lg-7 p-0">
                        <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                            <img
                                src="/assets/img/illustrations/auth-register-illustration-light.png"
                                alt="auth-register-cover"
                                className="img-fluid my-5 auth-illustration"
                                data-app-light-img="illustrations/auth-register-illustration-light.png"
                                data-app-dark-img="illustrations/auth-register-illustration-dark.png"
                            />

                            <img
                                src="/assets/img/illustrations/bg-shape-image-light.png"
                                alt="auth-register-cover"
                                className="platform-bg"
                                data-app-light-img="illustrations/bg-shape-image-light.png"
                                data-app-dark-img="illustrations/bg-shape-image-dark.png"
                            />
                        </div>
                    </div>
                    {/*  Left Text  */}

                    {/*  Register  */}
                    <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
                        <div className="w-px-400 mx-auto">
                            {/*  Logo  */}
                            <div className="app-brand mb-4">
                                <Link to="/" className="app-brand-link gap-2 text-white fs-1">
                                    Venuefy
                                </Link>
                            </div>
                            {/*  /Logo  */}
                            <h3 className="mb-1 fw-bold">Adventure starts here 🚀</h3>
                            <p className="mb-4">Make your app management easy and fun!</p>

                            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                                        <label className="form-check-label" htmlFor="terms-conditions">
                                            I agree to
                                            <a href="javascript:void(0);">privacy policy & terms</a>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100">Sign up</button>
                            </form>

                            <p className="text-center">
                                <span>Already have an account?</span>
                                <a href="auth-login-cover.html">
                                    <span>Sign in instead</span>
                                </a>
                            </p>

                            <div className="divider my-4">
                                <div className="divider-text">or</div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <a href="javascript:;" className="btn btn-icon btn-label-facebook me-3">
                                    <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                                </a>

                                <a href="javascript:;" className="btn btn-icon btn-label-google-plus me-3">
                                    <i className="tf-icons fa-brands fa-google fs-5"></i>
                                </a>

                                <a href="javascript:;" className="btn btn-icon btn-label-twitter">
                                    <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*  /Register  */}
                </div>
            </div>
        </>
    )
}

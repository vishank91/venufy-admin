import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import TextValidators from "../../Validators/TextValidators"
export default function SignupPage() {
    let [loading, setLoading] = useState(false)
    let [showPassword, setShowPassword] = useState(false)
    let [data, setData] = useState({
        name: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        cpassword: '',
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Full Name Field is Mendatory",
        username: "User Name Field is Mendatory",
        email: "Email Address Field is Mendatory",
        phone: "Phone Number Field is Mendatory",
        password: "Password Field is Mendatory",
    })
    let [show, setShow] = useState(false)

    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
    }
    async function postData(e) {
        e.preventDefault()

        let item = Object.values(errorMessage).find(x => x !== "")

        if (item) {
            setShow(true)
            return
        }

        if (data.password !== data.cpassword) {
            setShow(true)
            setErrorMessage({
                ...errorMessage,
                password: "Password and Confirm Password Doesn't Matched"
            })
            return
        }

        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/signup`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    confirmPassword: data.cpassword,
                    role: "customer"
                })
            })

            response = await response.json()

            if (response.result === "Done") {
                localStorage.setItem("phone", data.phone)
                localStorage.setItem("email", data.email)
                navigate("/verify-phone")
            }
            else {
                setErrorMessage({ ...errorMessage, ...response.reason })
                setShow(true)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="authentication-wrapper authentication-cover authentication-bg">
                <div className="authentication-inner row">
                    {/*  Left Text  */}
                    <div className="d-none d-lg-flex col-lg-6 p-0">
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
                    <div className="d-flex col-12 col-lg-6 align-items-center p-sm-5 p-4">
                        <div className="w-px-400 mx-auto">
                            {/*  Logo  */}
                            <div className="app-brand mb-4">
                                <Link to="/" className="app-brand-link gap-2 text-dark fs-1">
                                    {import.meta.env.VITE_APP_SITE_NAME}
                                </Link>
                            </div>
                            {/*  /Logo  */}
                            <h3 className="mb-1 fw-bold">Create Your Account and Adventure starts here 🚀</h3>
                            <p className="mb-4">Join us today and take the first step toward a better experience.</p>

                            <form id="formAuthentication" className="mb-3" onSubmit={postData}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name" className="form-label">Full Name*</label>
                                        <input
                                            type="text"
                                            className={`form-control ${show && errorMessage.name ? 'border-danger' : ''}`}
                                            id="name"
                                            name="name"
                                            onChange={getInputData}
                                            placeholder="Enter your Full Name"
                                            autoFocus
                                        />
                                        {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phone" className="form-label">Phone Number*</label>
                                        <input
                                            type="text"
                                            className={`form-control ${show && errorMessage.phone ? 'border-danger' : ''}`}
                                            id="phone"
                                            name="phone"
                                            onChange={getInputData}
                                            placeholder="Enter your Phone Number"
                                            autoFocus
                                        />
                                        {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="username" className="form-label">Username*</label>
                                        <input
                                            type="text"
                                            className={`form-control ${show && errorMessage.username ? 'border-danger' : ''}`}
                                            id="username"
                                            name="username"
                                            onChange={getInputData}
                                            placeholder="Enter your Username"
                                            autoFocus
                                        />
                                        {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p> : null}
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">Email Address*</label>
                                        <input
                                            type="email"
                                            className={`form-control ${show && errorMessage.email ? 'border-danger' : ''}`}
                                            id="email"
                                            name="email"
                                            onChange={getInputData}
                                            placeholder="Enter your Email Address"
                                            autoFocus
                                        />
                                        {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                                    </div>

                                    <div className="col-md-6 mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type={showPassword ? 'text' : "password"}
                                                id="password"
                                                className={`form-control ${show && errorMessage.password ? 'border-danger' : ''}`}
                                                name="password"
                                                onChange={getInputData}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />
                                            <span className="input-group-text cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                                <i className={`${showPassword ? 'ti ti-eye' : 'ti ti-eye-off'}`}></i>
                                            </span>
                                        </div>
                                        {show && errorMessage.password ? errorMessage.password.split("|").map((item, index) => {
                                            return <p className='text-danger' key={index}>{item}</p>
                                        }) : null}
                                    </div>

                                    <div className="col-md-6 mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Confirm Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="cpassword"
                                                className={`form-control ${show && errorMessage.password ? 'border-danger' : ''}`}
                                                name="cpassword"
                                                onChange={getInputData}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />
                                        </div>

                                    </div>

                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" required type="checkbox" id="terms-conditions" name="terms" />
                                            <label className="form-check-label" htmlFor="terms-conditions">
                                                I agree to
                                                <a href="javascript:void(0);">privacy policy & terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary d-grid w-100"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Please wait...
                                            </>
                                        ) : (
                                            "Sign up"
                                        )}
                                    </button>
                                </div>
                            </form>

                            <p className="text-center">
                                <span>Already have an account?</span>
                                <Link to="/login">
                                    <span>Sign in instead</span>
                                </Link>
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

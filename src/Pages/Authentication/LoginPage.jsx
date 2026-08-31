import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {

  let [loading, setLoading] = useState(false)
  let [showPassword, setShowPassword] = useState(false)
  let [data, setData] = useState({
    username: '',
    password: ''
  })
  let [errorMessage, setErrorMessage] = useState({
    username: '',
    password: ''
  })
  let [show, setShow] = useState(false)

  let navigate = useNavigate()

  function getInputData(e) {
    let { name, value } = e.target

    setData({ ...data, [name]: value })

    setErrorMessage({
      ...errorMessage,
      [name]: value ? '' : `${name === 'username' ? 'Email or Username' : 'Password'} Field is Mandatory`
    })
  }

  async function postData(e) {
    e.preventDefault()

    let errors = {}

    if (!data.username) {
      errors.username = "Email or Username Field is Mandatory"
    }

    if (!data.password) {
      errors.password = "Password Field is Mandatory"
    }

    if (Object.keys(errors).length) {
      setErrorMessage(errors)
      setShow(true)
      return
    }

    setLoading(true)

    try {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          login: data.username,
          password: data.password
        })
      })

      response = await response.json()
      console.log(response)
      if (response.result === "Done") {

        // Store login response
        localStorage.setItem("user", JSON.stringify(response.data))

        navigate("/")

      }
      else {
        setErrorMessage({
          username: response.reason?.username || '',
          password: response.reason?.password || response.reason || 'Invalid username or password'
        })

        setShow(true)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">

      <div className="authentication-inner row">

        {/* Left Section */}
        <div className="d-none d-lg-flex col-lg-7 p-0">

          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">

            <img
              src="/assets/img/illustrations/auth-login-illustration-light.png"
              alt="auth-login-cover"
              className="img-fluid my-5 auth-illustration"
            />

            <img
              src="/assets/img/illustrations/bg-shape-image-light.png"
              alt="auth-login-cover"
              className="platform-bg"
            />

          </div>

        </div>
        {/* /Left Section */}


        {/* Login Section */}
        <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">

          <div className="w-px-400 mx-auto">

            {/* Logo */}
            <div className="app-brand mb-4">

              <Link
                to="/"
                className="app-brand-link gap-2 text-dark fs-1"
              >
                Venuefy
              </Link>

            </div>
            {/* /Logo */}


            <h3 className="mb-1 fw-bold">
              Welcome to Venuefy! 👋
            </h3>

            <p className="mb-4">
              Please sign-in to your account and start the adventure
            </p>


            <form
              id="formAuthentication"
              className="mb-3"
              onSubmit={postData}
            >

              {/* Username / Email */}
              <div className="mb-3">

                <label
                  htmlFor="username"
                  className="form-label"
                >
                  Email or Username or Phone Number
                </label>

                <input
                  type="text"
                  className={`form-control ${show && errorMessage.username ? 'border-danger' : ''}`}
                  id="username"
                  name="username"
                  value={data.username}
                  onChange={getInputData}
                  placeholder="Enter your email or username or phone number"
                  autoFocus
                />

                {show && errorMessage.username && (
                  <p className="text-danger">
                    {errorMessage.username}
                  </p>
                )}

              </div>


              {/* Password */}
              <div className="mb-3 form-password-toggle">

                <div className="d-flex justify-content-between">

                  <label
                    className="form-label"
                    htmlFor="password"
                  >
                    Password
                  </label>

                  <Link to="/forgot-password">
                    <small>
                      Forgot Password?
                    </small>
                  </Link>

                </div>


                <div className="input-group input-group-merge">

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`form-control ${show && errorMessage.password ? 'border-danger' : ''}`}
                    name="password"
                    value={data.password}
                    onChange={getInputData}
                    placeholder="••••••••••••"
                  />

                  <span
                    className="input-group-text cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={
                        showPassword
                          ? "ti ti-eye"
                          : "ti ti-eye-off"
                      }
                    ></i>
                  </span>

                </div>

                {show && errorMessage.password && (
                  <p className="text-danger">
                    {errorMessage.password}
                  </p>
                )}

              </div>


              {/* Remember Me */}
              <div className="mb-3">

                <div className="form-check">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="remember-me"
                  >
                    Remember Me
                  </label>

                </div>

              </div>


              {/* Login Button */}
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
                  "Sign in"
                )}

              </button>

            </form>


            <p className="text-center">

              <span>
                New on our platform?
              </span>

              <Link to="/signup">
                <span>
                  Create an account
                </span>
              </Link>

            </p>


            <div className="divider my-4">

              <div className="divider-text">
                or
              </div>

            </div>


            {/* Social Login */}
            <div className="d-flex justify-content-center">

              <a
                href="#facebook"
                className="btn btn-icon btn-label-facebook me-3"
              >
                <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
              </a>

              <a
                href="#google"
                className="btn btn-icon btn-label-google-plus me-3"
              >
                <i className="tf-icons fa-brands fa-google fs-5"></i>
              </a>

              <a
                href="#twitter"
                className="btn btn-icon btn-label-twitter"
              >
                <i className="tf-icons fa-brands fa-twitter fs-5"></i>
              </a>

            </div>

          </div>

        </div>
        {/* /Login Section */}

      </div>

    </div>
  )
}

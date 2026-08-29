import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function PhoneVerificationPage() {

  let [otp, setOtp] = useState(["", "", "", "", "", ""])
  let inputRefs = useRef([])
  let [errorMessage, setErrorMessage] = useState("")
  let [show, setShow] = useState(false)

  let navigate = useNavigate()

  function handleChange(e, index) {
    let value = e.target.value

    setShow(false)

    // Allow numbers only
    if (!/^\d$/.test(value)) {
      return
    }

    let newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move focus to the next input
    if (index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  function handleKeyDown(e, index) {

    // Move to the previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  function handlePaste(e) {
    e.preventDefault()

    // Get only numeric values from clipboard
    let value = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)

    if (!value) {
      return
    }

    let newOtp = ["", "", "", "", "", ""]

    value.split("").forEach((digit, index) => {
      newOtp[index] = digit
    })

    setOtp(newOtp)

    // Focus the last filled input
    inputRefs.current[Math.min(value.length - 1, 5)].focus()
  }

  async function postSubmit(e) {
    e.preventDefault()

    let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/verify-phone`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        phone: localStorage.getItem("phone"),
        otp: otp.join("")
      })
    })
    response = await response.json()
    console.log(response)
    if (response.result === "Done") {
      localStorage.removeItem("phone")
      navigate("/login")
    }
    else {
      setErrorMessage(Object.values(response.reason ?? {}))
      setShow(true)
    }
  }

  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <div className="authentication-inner row">

        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">

            <img
              src="../../assets/img/illustrations/auth-two-step-illustration-light.png"
              alt="auth-two-steps-cover"
              className="img-fluid my-5 auth-illustration"
            />

            <img
              src="../../assets/img/illustrations/bg-shape-image-light.png"
              alt="auth-two-steps-cover"
              className="platform-bg"
            />

          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center p-4 p-sm-5">
          <div className="w-px-400 mx-auto">

            <div className="app-brand mb-4">
              <Link to="/" className="app-brand-link gap-2 text-dark fs-1">
                Venuefy
              </Link>
            </div>

            <h3 className="mb-1 fw-bold">
              Two Step Verification 💬
            </h3>

            <p className="text-start mb-4">
              We sent a verification code to your mobile.
              Enter the code from the mobile in the field below.

              <span className="fw-bold d-block mt-2">
                ******{localStorage.getItem("phone")?.slice(-4)}
              </span>
            </p>

            <p className="mb-0 fw-semibold">
              {show ? errorMessage : 'Type your 6 digit security code'}
            </p>

            <form onSubmit={postSubmit}>

              <div className="mb-3">

                <div className="auth-input-wrapper d-flex align-items-center justify-content-sm-between">

                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(element) => inputRefs.current[index] = element}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      autoFocus={index === 0}
                      className="form-control auth-input h-px-50 text-center mx-1 my-2"
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                    />
                  ))}

                </div>

                <input
                  type="hidden"
                  name="otp"
                  value={otp.join("")}
                  readOnly
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary d-grid w-100 mb-3"
              >
                Verify my account
              </button>

              <div className="text-center">
                Didn't get the code?
                <a href="#resend" onClick={(e) => e.preventDefault()}>
                  {" "}Resend
                </a>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  )
}
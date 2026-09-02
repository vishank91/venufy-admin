import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function VerifyPhonePage() {
    let [otp, setOtp] = useState(["", "", "", "", "", ""])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)
    let [seconds, setSeconds] = useState(120)
    let inputs = useRef([])
    let navigate = useNavigate()
    let phone = localStorage.getItem("phone") || ""

    useEffect(() => {
        let timer = setInterval(() => {
            setSeconds((value) => value > 0 ? value - 1 : 0)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    function changeOtp(value, index) {
        if (!/^\d?$/.test(value)) return

        let newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        if (value && index < 5) inputs.current[index + 1].focus()
    }

    function keyDown(e, index) {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus()
        }
    }

    function pasteOtp(e) {
        e.preventDefault()

        let value = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
        if (!value) return

        let newOtp = ["", "", "", "", "", ""]
        value.split("").forEach((digit, index) => newOtp[index] = digit)
        setOtp(newOtp)

        inputs.current[Math.min(value.length - 1, 5)].focus()
    }

    async function postSubmit(e) {
        e.preventDefault()
        setError("")

        let code = otp.join("")

        if (code.length !== 6) {
            setError("Please enter the complete 6 digit OTP.")
            return
        }

        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/verify-phone`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone, otp: code })
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Invalid OTP.")

            navigate("/login")
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function resendOtp() {
        if (seconds > 0 || loading) return

        setError("")

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/resend-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone })
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Unable to resend OTP.")

            setSeconds(120)
            setOtp(["", "", "", "", "", ""])
            inputs.current[0].focus()
        } catch (error) {
            setError(error.message)
        }
    }

    let time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`

    return (
        <div className="authentication-wrapper authentication-cover authentication-bg">
            <div className="authentication-inner row">
                <div className="d-none d-lg-flex col-lg-7 p-0">
                    <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                        <img src="../../assets/img/illustrations/auth-two-step-illustration-light.png" alt="verify-phone" className="img-fluid my-5 auth-illustration" />
                        <img src="../../assets/img/illustrations/bg-shape-image-light.png" alt="background" className="platform-bg" />
                    </div>
                </div>

                <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
                    <div className="w-px-400 mx-auto">
                        <div className="app-brand mb-4">
                            <Link to="/" className="app-brand-link gap-2 text-dark fs-1">Venuefy</Link>
                        </div>

                        <h3 className="mb-1 fw-bold">Two Step Verification 💬</h3>
                        <p className="text-start mb-4">
                            We sent a verification code to your mobile.
                            <span className="fw-bold d-block mt-2">******{phone.slice(-4)}</span>
                        </p>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={postSubmit}>
                            <p className="mb-0 fw-semibold">Type your 6 digit security code</p>

                            <div className="mb-3">
                                <div className="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper">
                                    {otp.map((value, index) => (
                                        <input
                                            key={index}
                                            ref={(element) => inputs.current[index] = element}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength="1"
                                            value={value}
                                            autoFocus={index === 0}
                                            onChange={(e) => changeOtp(e.target.value, index)}
                                            onKeyDown={(e) => keyDown(e, index)}
                                            onPaste={pasteOtp}
                                            className="form-control auth-input h-px-50 text-center mx-1 my-2"
                                        />
                                    ))}
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className="btn btn-primary d-grid w-100 mb-3">
                                {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                                {loading ? "Please wait..." : "Verify my account"}
                            </button>

                            <div className="text-center">
                                Didn't get the code?
                                {seconds > 0
                                    ? <span className="fw-semibold ms-1">Resend in {time}</span>
                                    : <button type="button" className="btn btn-link p-0 ms-1" onClick={resendOtp}>Resend</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

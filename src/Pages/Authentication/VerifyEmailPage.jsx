import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function VerifyEmailPage() {

     let [searchParams] = useSearchParams()

     let [loading, setLoading] = useState(true)
     let [resendLoading, setResendLoading] = useState(false)
     let [message, setMessage] = useState("")
     let [success, setSuccess] = useState(false)

     let token = searchParams.get("token")

     useEffect(() => {
          verifyEmail()
     }, [])

     async function verifyEmail() {

          if (!token) {
               setMessage("Invalid or missing verification token")
               setLoading(false)
               return
          }

          try {
               let response = await fetch(
                    `${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/verify-email?token=${token}`
               )

               response = await response.json()

               if (response.result === "Done") {
                    setSuccess(true)
                    setMessage(
                         response.reason || "Your email has been verified successfully."
                    )
               }
               else {
                    setMessage(
                         response.reason || "Email verification failed."
                    )
               }

          } catch (error) {
               console.log(error)
               setMessage("Something went wrong. Please try again.")
          }
          finally {
               setLoading(false)
          }
     }

     async function resendEmail() {

          let email = localStorage.getItem("email")

          if (!email) {
               setMessage("Email address not found. Please signup again.")
               return
          }

          setResendLoading(true)

          try {
               let response = await fetch(
                    `${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/resent-email`,
                    {
                         method: "POST",
                         headers: {
                              "content-type": "application/json"
                         },
                         body: JSON.stringify({
                              email: email
                         })
                    }
               )

               response = await response.json()

               if (response.result === "Done") {
                    setMessage(
                         response.reason || "Verification email has been sent again."
                    )
               }
               else {
                    setMessage(
                         response.reason || "Unable to resend verification email."
                    )
               }

          } catch (error) {
               console.log(error)
               setMessage("Something went wrong. Please try again.")
          }
          finally {
               setResendLoading(false)
          }
     }

     return (
          <div className="authentication-wrapper authentication-cover authentication-bg">

               <div className="authentication-inner row">

                    {/* Left Section */}
                    <div className="d-none d-lg-flex col-lg-7 p-0">

                         <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">

                              <img
                                   src="/assets/img/illustrations/auth-verify-email-illustration-light.png"
                                   alt="auth-verify-email-cover"
                                   className="img-fluid my-5 auth-illustration"
                              />

                              <img
                                   src="/assets/img/illustrations/bg-shape-image-light.png"
                                   alt="auth-verify-email-cover"
                                   className="platform-bg"
                              />

                         </div>

                    </div>
                    {/* /Left Section */}


                    {/* Verification Section */}
                    <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">

                         <div className="w-px-400 mx-auto">

                              {/* Logo */}
                              <div className="app-brand mb-4">

                                   <Link
                                        to="/"
                                        className="app-brand-link gap-2 text-dark fs-1"
                                   >
                                        {import.meta.env.VITE_APP_SITE_NAME}
                                   </Link>

                              </div>
                              {/* /Logo */}


                              {loading ? (

                                   <>
                                        <h3 className="mb-1 fw-bold">
                                             Verifying your email ✉️
                                        </h3>

                                        <p className="text-start mb-4">
                                             Please wait while we verify your email address.
                                        </p>

                                        <button
                                             className="btn btn-primary w-100"
                                             disabled
                                        >
                                             <span
                                                  className="spinner-border spinner-border-sm me-2"
                                                  role="status"
                                                  aria-hidden="true"
                                             ></span>

                                             Please wait...
                                        </button>
                                   </>

                              ) : success ? (

                                   <>
                                        <h3 className="mb-1 fw-bold">
                                             Email Verified Successfully 🎉
                                        </h3>

                                        <p className="text-start mb-4">
                                             {message}
                                        </p>

                                        <Link
                                             to="/login"
                                             className="btn btn-primary w-100"
                                        >
                                             Go to Login
                                        </Link>
                                   </>

                              ) : (

                                   <>
                                        <h3 className="mb-1 fw-bold">
                                             Email Verification Failed ❌
                                        </h3>

                                        <p className="text-start mb-4">
                                             {message}
                                        </p>

                                        <button
                                             type="button"
                                             className="btn btn-primary w-100"
                                             onClick={resendEmail}
                                             disabled={resendLoading}
                                        >

                                             {resendLoading ? (
                                                  <>
                                                       <span
                                                            className="spinner-border spinner-border-sm me-2"
                                                            role="status"
                                                            aria-hidden="true"
                                                       ></span>

                                                       Please wait...
                                                  </>
                                             ) : (
                                                  "Resend Email Verification Link"
                                             )}

                                        </button>

                                   </>
                              )}

                         </div>

                    </div>
                    {/* /Verification Section */}

               </div>

          </div>
     )
}
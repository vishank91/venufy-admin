import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { verifyEmail, resendEmail } from "../../Redux/ActionCreators/AuthActionCreators";

export default function VerifyEmailPage() {
  let [searchParams] = useSearchParams();
  let [status, setStatus] = useState("loading");
  let [message, setMessage] = useState("");
  let [loading, setLoading] = useState(false);
  let verifyStarted = useRef(false);
  let dispatch = useDispatch();
  let auth = useSelector((state) => state.AuthReducer);
  let email = localStorage.getItem("email") || "";

  useEffect(() => {
    if (verifyStarted.current) return;

    verifyStarted.current = true;

    let token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("Email verification token is missing.");
      return;
    }

    dispatch(verifyEmail(token));
  }, []);

  useEffect(() => {
    if (auth.response?.result === "Done" && auth.response?.message === "Email verified successfully.") {
      setStatus("success");
      setMessage(auth.response.message || "Your email has been verified successfully.");
      setLoading(false);
    }

    if (auth.error) {
      setStatus("error");
      setMessage(auth.error);
      setLoading(false);
    }
  }, [auth.response, auth.error]);

  function resendVerificationEmail() {
    if (!email || loading) return;

    setLoading(true);
    setMessage("");
    dispatch(resendEmail({ email }));
  }

  useEffect(() => {
    if (auth.response?.result === "Done" && auth.response?.message === "Verification email sent successfully.") {
      setMessage(auth.response.message);
      setLoading(false);
    }
  }, [auth.response]);

  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <div className="authentication-inner row">
        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            <img src="../../assets/img/illustrations/auth-verify-email-illustration-light.png" alt="verify-email" className="img-fluid my-5 auth-illustration" />
            <img src="../../assets/img/illustrations/bg-shape-image-light.png" alt="background" className="platform-bg" />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <Link to="/" className="app-brand-link gap-2 text-dark fs-1">
                Venuefy
              </Link>
            </div>

            <h3 className="mb-1 fw-bold">Verify your email ✉️</h3>

            {status === "loading" && (
              <div className="text-center py-4">
                <span className="spinner-border text-primary"></span>
                <p className="mt-3 mb-0">Verifying your email...</p>
              </div>
            )}

            {status === "success" && (
              <>
                <p className="text-start mb-4">{message}</p>
                <Link className="btn btn-primary w-100" to="/login">
                  Go to Login
                </Link>
              </>
            )}

            {status === "error" && (
              <>
                <div className="alert alert-danger">{message}</div>
                <button className="btn btn-primary w-100 mb-3" disabled={loading} onClick={resendVerificationEmail}>
                  {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                  {loading ? "Please wait..." : "Resend Email Verification Link"}
                </button>
                <p className="text-center mb-0">
                  <Link to="/login">Back to Login</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

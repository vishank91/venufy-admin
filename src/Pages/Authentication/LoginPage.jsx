import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../Redux/ActionCreators/AuthActionCreators";

export default function LoginPage() {
  let [loginValue, setLoginValue] = useState("");
  let [password, setPassword] = useState("");
  let [showPassword, setShowPassword] = useState(false);
  let [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let auth = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (auth.response?.result === "Done" && auth.response?.accessToken) {
      let user = auth.response.user;

      if (user?.role === "customer") {
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");

        setError(
          <>
            You are not authorized to access this platform. Please use our main website.{" "}
            <a href="https://venuefy.in" target="_blank" rel="noreferrer">
              Click here to visit Venuefy
            </a>
          </>,
        );

        return;
      }

      navigate("/");
    }
  }, [auth.response]);

  useEffect(() => {
    if (auth.error) {
      setError(auth.error);
    }
  }, [auth.error]);

  function postSubmit(e) {
    e.preventDefault();
    setError("");

    if (!loginValue || !password) {
      setError("Please enter login and password.");
      return;
    }

    dispatch(
      login({
        login: loginValue,
        password: password,
      }),
    );
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
              <Link to="/" className="app-brand-link gap-2 text-dark fs-1">
                Venuefy
              </Link>
            </div>

            <h3 className="mb-1 fw-bold">Welcome to Venuefy! 👋</h3>

            <p className="mb-4">Please sign-in to your account and start the adventure</p>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={postSubmit}>
              <div className="mb-3">
                <label className="form-label">Email, Username or Phone</label>

                <input type="text" className="form-control" value={loginValue} onChange={(e) => setLoginValue(e.target.value)} placeholder="Enter your email, username or phone" autoFocus />
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label className="form-label">Password</label>

                  <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>

                <div className="input-group input-group-merge">
                  <input type={showPassword ? "text" : "password"} className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />

                  <span className="input-group-text cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    <i className={showPassword ? "ti ti-eye" : "ti ti-eye-off"}></i>
                  </span>
                </div>
              </div>

              <button type="submit" disabled={auth.loading} className="btn btn-primary d-grid w-100">
                {auth.loading && <span className="spinner-border spinner-border-sm me-2"></span>}

                {auth.loading ? "Please wait..." : "Sign in"}
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
  );
}

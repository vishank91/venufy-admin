import React from "react";
import { Link } from "react-router-dom";

export default function AuthenticationLayout({ illustration, children }) {
  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <div className="authentication-inner row">
        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            <img src={`/assets/img/illustrations/${illustration}`} alt="authentication-cover" className="img-fluid my-5 auth-illustration" />
            <img src="/assets/img/illustrations/bg-shape-image-light.png" alt="authentication-background" className="platform-bg" />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center p-4 p-sm-5">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <Link to="/" className="app-brand-link gap-2 text-dark fs-1">
                {import.meta.env.VITE_APP_SITE_NAME || "Venuefy"}
              </Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

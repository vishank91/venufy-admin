import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
  let user = useSelector((state) => state.AuthReducer.user) || {};
  let role = user.role;

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 className="fw-bold mb-2">Welcome {user.name || user.username || "to Venuefy"}! 👋</h4>
              <p className="mb-3">Manage your account and profile from your dashboard.</p>
              {role === "vendor" && (
                <Link to="/profile" className="btn btn-primary">
                  View Profile
                </Link>
              )}
            </div>
          </div>
        </div>

        {role === "vendor" && (
          <>
            <div className="col-md-4 col-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <span className="avatar-initial rounded bg-label-primary p-2">
                    <i className="ti ti-user"></i>
                  </span>
                  <h5 className="mt-3">My Profile</h5>
                  <p>View your account information.</p>
                  <Link to="/profile">Open Profile</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <span className="avatar-initial rounded bg-label-info p-2">
                    <i className="ti ti-edit"></i>
                  </span>
                  <h5 className="mt-3">Edit Profile</h5>
                  <p>Update your personal information.</p>
                  <Link to="/profile/edit">Edit Profile</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <span className="avatar-initial rounded bg-label-warning p-2">
                    <i className="ti ti-lock"></i>
                  </span>
                  <h5 className="mt-3">Security</h5>
                  <p>Change your account password.</p>
                  <Link to="/profile/change-password">Change Password</Link>
                </div>
              </div>
            </div>
          </>
        )}

        {(role === "admin" || role === "super_admin") && (
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="mb-2">Administration</h5>
                <p>Manage Venuefy platform data from the administration menu.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

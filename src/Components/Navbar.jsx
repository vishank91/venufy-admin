import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/ActionCreators/AuthActionCreators";

export default function Navbar() {
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state) => state.AuthReducer.user) || {};

  function postLogout() {
    dispatch(logout());
    navigate("/login", { replace: true });
  }

  return (
    <nav className="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <div className="navbar-nav-right d-flex align-items-center w-100" id="navbar-collapse">
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className={`nav-item navbar-dropdown dropdown-user dropdown ${open ? "show" : ""}`}>
            <button className="btn nav-link dropdown-toggle hide-arrow" onClick={() => setOpen(!open)}>
              <span className="avatar avatar-online">
                <img src="../../assets/img/avatars/1.png" alt="User" className="rounded-circle" />
              </span>
            </button>
            <ul className={`dropdown-menu dropdown-menu-end ${open ? "show" : ""}`}>
              <li>
                <Link className="dropdown-item" to="/profile">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img src="../../assets/img/avatars/1.png" alt="User" className="rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-medium d-block">{user.name || "User"}</span>
                      <small className="text-muted">{user.role || ""}</small>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  <i className="ti ti-user-check me-2"></i>My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile/change-password">
                  <i className="ti ti-lock me-2"></i>Change Password
                </Link>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <button className="dropdown-item" onClick={postLogout}>
                  <i className="ti ti-logout me-2"></i>Log Out
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

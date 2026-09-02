import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let [user] = useState(() => JSON.parse(localStorage.getItem("user") || "{}"))
    let navigate = useNavigate()

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("login")
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="#menu">
                    <i className="ti ti-menu-2 ti-sm"></i>
                </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <div className="navbar-nav align-items-center">
                    <div className="nav-item navbar-search-wrapper mb-0">
                        <span className="nav-link d-flex align-items-center px-0">
                            <i className="ti ti-search ti-md me-2"></i>
                            <span className="d-none d-md-inline-block text-muted">Search</span>
                        </span>
                    </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a className="nav-link dropdown-toggle hide-arrow" href="#user" data-bs-toggle="dropdown">
                            <div className="avatar avatar-online">
                                <span className="avatar-initial rounded-circle bg-label-primary">
                                    {(user.name || user.username || "U").charAt(0).toUpperCase()}
                                </span>
                            </div>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link className="dropdown-item" to="/profile">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar avatar-online">
                                                <span className="avatar-initial rounded-circle bg-label-primary">
                                                    {(user.name || user.username || "U").charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="fw-medium d-block">{user.name || user.username || "User"}</span>
                                            <small className="text-muted">{user.email || ""}</small>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><Link className="dropdown-item" to="/profile"><i className="ti ti-user-check me-2"></i>My Profile</Link></li>
                            <li><Link className="dropdown-item" to="/profile/edit"><i className="ti ti-settings me-2"></i>Edit Profile</Link></li>
                            <li><Link className="dropdown-item" to="/profile/change-password"><i className="ti ti-lock me-2"></i>Change Password</Link></li>
                            <li><div className="dropdown-divider"></div></li>
                            <li><a href="#logout" className="dropdown-item" onClick={(e) => { e.preventDefault(); logout() }}><i className="ti ti-logout me-2"></i>Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

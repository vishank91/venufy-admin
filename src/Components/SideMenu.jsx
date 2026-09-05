import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function SideMenu() {
    let location = useLocation()
    let navigate = useNavigate()
    let [profileOpen, setProfileOpen] = useState(location.pathname.startsWith('/profile'))

    function toggleProfile(e) {
        e.preventDefault()
        setProfileOpen(!profileOpen)
    }

    function closeMobileMenu() {
        document.body.classList.remove('layout-menu-expanded')
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('login')
        localStorage.removeItem('user')
        closeMobileMenu()
        navigate('/login')
    }

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <Link to="/" className="app-brand-link" onClick={closeMobileMenu}>
                    <span className="app-brand-text demo menu-text fw-bold">Venuefy</span>
                </Link>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/" className="menu-link" onClick={closeMobileMenu}>
                        <i className="menu-icon tf-icons ti ti-smart-home"></i>
                        <div>Dashboard</div>
                    </Link>
                </li>

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Account</span>
                </li>

                <li className={`menu-item ${location.pathname.startsWith('/profile') ? 'active' : ''} ${profileOpen ? 'open' : ''}`}>
                    <a href="#profile" className="menu-link menu-toggle" onClick={toggleProfile}>
                        <i className="menu-icon tf-icons ti ti-user"></i>
                        <div>Profile</div>
                    </a>
                    <ul className="menu-sub">
                        <li className={`menu-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                            <Link to="/profile" className="menu-link" onClick={closeMobileMenu}><div>My Profile</div></Link>
                        </li>
                        <li className={`menu-item ${location.pathname === '/profile/edit' ? 'active' : ''}`}>
                            <Link to="/profile/edit" className="menu-link" onClick={closeMobileMenu}><div>Edit Profile</div></Link>
                        </li>
                        <li className={`menu-item ${location.pathname === '/profile/change-password' ? 'active' : ''}`}>
                            <Link to="/profile/change-password" className="menu-link" onClick={closeMobileMenu}><div>Change Password</div></Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item">
                    <a href="#logout" className="menu-link" onClick={(e) => { e.preventDefault(); logout() }}>
                        <i className="menu-icon tf-icons ti ti-logout"></i>
                        <div>Logout</div>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

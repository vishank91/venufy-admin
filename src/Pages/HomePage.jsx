import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideMenu from '../Components/SideMenu'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function HomePage() {
    let user = JSON.parse(localStorage.getItem("user") || "{}")
    let navigate = useNavigate()

    useEffect(()=>{
        (()=>{
            setTimeout(()=>{
                if(!user.name)
                    navigate("/login")
            },500)
        })()
    },[])
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SideMenu />
                <div className="layout-page">
                    <Navbar />
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="fw-bold mb-2">Welcome {user.name || user.username || "to Venuefy"}! 👋</h4>
                                            <p className="mb-3">Manage your account and profile from your dashboard.</p>
                                            <Link to="/profile" className="btn btn-primary">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <span className="avatar-initial rounded bg-label-primary p-2"><i className="ti ti-user"></i></span>
                                            <h5 className="mt-3">My Profile</h5>
                                            <p>View your account information.</p>
                                            <Link to="/profile">Open Profile</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <span className="avatar-initial rounded bg-label-info p-2"><i className="ti ti-edit"></i></span>
                                            <h5 className="mt-3">Edit Profile</h5>
                                            <p>Update your personal information.</p>
                                            <Link to="/profile/edit">Edit Profile</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <span className="avatar-initial rounded bg-label-warning p-2"><i className="ti ti-lock"></i></span>
                                            <h5 className="mt-3">Security</h5>
                                            <p>Change your account password.</p>
                                            <Link to="/profile/change-password">Change Password</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
    let [profile, setProfile] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState("")

    useEffect(() => {
        getProfile()
    }, [])

    async function getProfile() {
        setError("")

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/vendors/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Unable to load profile.")

            setProfile(data.data || data.vendor || data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="container-xxl container-p-y text-center">
                <span className="spinner-border text-primary"></span>
            </div>
        )
    }

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-1">My Profile</h4>
                    <p className="text-muted mb-0">View your vendor business profile.</p>
                </div>
                <Link to="/profile/edit" className="btn btn-primary">
                    <i className="ti ti-edit me-1"></i> Edit Profile
                </Link>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {profile && (
                <div className="row">
                    <div className="col-lg-4 col-md-5 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <div className="avatar avatar-xl mx-auto mb-3">
                                    <span className="avatar-initial rounded-circle bg-label-primary">
                                        {(profile.businessName || "V").charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <h5 className="mb-1">{profile.businessName || "Vendor"}</h5>
                                <span className="badge bg-label-primary">{profile.businessType || "Business"}</span>
                                <p className="text-muted mt-3 mb-0">{profile.description || "No business description added."}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="mb-0">Business Information</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 mb-3"><small className="text-muted">Business Name</small><div className="fw-semibold">{profile.businessName || "-"}</div></div>
                                    <div className="col-sm-6 mb-3"><small className="text-muted">Business Type</small><div className="fw-semibold">{profile.businessType || "-"}</div></div>
                                    <div className="col-sm-6 mb-3"><small className="text-muted">Business Email</small><div className="fw-semibold">{profile.businessEmail || "-"}</div></div>
                                    <div className="col-sm-6 mb-3"><small className="text-muted">Business Phone</small><div className="fw-semibold">{profile.businessPhone || "-"}</div></div>
                                    <div className="col-sm-6 mb-3"><small className="text-muted">Alternate Phone</small><div className="fw-semibold">{profile.alternateBusinessPhone || "-"}</div></div>
                                    <div className="col-sm-6 mb-3"><small className="text-muted">Established Year</small><div className="fw-semibold">{profile.establishedYear || "-"}</div></div>
                                    <div className="col-12 mb-3"><small className="text-muted">Website</small><div className="fw-semibold">{profile.website || "-"}</div></div>
                                    <div className="col-12"><small className="text-muted">Description</small><div className="fw-semibold">{profile.description || "-"}</div></div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Address</h5>
                            </div>
                            <div className="card-body">
                                <p className="mb-1">{profile.address?.fullAddress || "-"}</p>
                                <p className="mb-0 text-muted">
                                    {[profile.address?.locality, profile.address?.city, profile.address?.state, profile.address?.country, profile.address?.pincode].filter(Boolean).join(", ")}
                                </p>
                                {profile.address?.landmark && <p className="mb-0 mt-2">Landmark: {profile.address.landmark}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

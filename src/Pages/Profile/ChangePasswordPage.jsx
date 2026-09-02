import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ChangePasswordPage() {
    let [currentPassword, setCurrentPassword] = useState("")
    let [newPassword, setNewPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    let [showCurrent, setShowCurrent] = useState(false)
    let [showNew, setShowNew] = useState(false)
    let [showConfirm, setShowConfirm] = useState(false)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    async function postSubmit(e) {
        e.preventDefault()
        setError("")
        setSuccess("")

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.")
            return
        }

        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/change-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ currentPassword, newPassword })
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Unable to change password.")

            setSuccess(data.message || "Password changed successfully.")
            setCurrentPassword("")
            setNewPassword("")
            setConfirmPassword("")
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-1">Change Password</h5>
                            <p className="text-muted mb-0">Keep your account secure with a strong password.</p>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <form onSubmit={postSubmit}>
                                {[
                                    ["Current Password", currentPassword, setCurrentPassword, showCurrent, setShowCurrent],
                                    ["New Password", newPassword, setNewPassword, showNew, setShowNew],
                                    ["Confirm New Password", confirmPassword, setConfirmPassword, showConfirm, setShowConfirm]
                                ].map(([label, value, setter, show, setShow]) => (
                                    <div className="mb-3" key={label}>
                                        <label className="form-label">{label}</label>
                                        <div className="input-group input-group-merge">
                                            <input type={show ? "text" : "password"} className="form-control" value={value} onChange={(e) => setter(e.target.value)} required />
                                            <span className="input-group-text cursor-pointer" onClick={() => setShow(!show)}>
                                                <i className={show ? "ti ti-eye" : "ti ti-eye-off"}></i>
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <button type="submit" disabled={loading} className="btn btn-primary w-100 mb-3">
                                    {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                                    {loading ? "Please wait..." : "Change Password"}
                                </button>

                                <div className="text-center">
                                    <Link to="/profile">Back to Profile</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateProfilePage() {
    let [form, setForm] = useState({
        category: "",
        businessName: "",
        businessType: "individual",
        businessEmail: "",
        businessPhone: "",
        alternateBusinessPhone: "",
        description: "",
        website: "",
        establishedYear: "",
        address: {
            country: "India",
            state: "",
            city: "",
            locality: "",
            pincode: "",
            landmark: "",
            fullAddress: ""
        },
        socialLinks: {
            facebook: "",
            instagram: "",
            youtube: ""
        }
    })
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")
    let navigate = useNavigate()

    function changeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function changeAddress(e) {
        setForm({ ...form, address: { ...form.address, [e.target.name]: e.target.value } })
    }

    function changeSocial(e) {
        setForm({ ...form, socialLinks: { ...form.socialLinks, [e.target.name]: e.target.value } })
    }

    async function postSubmit(e) {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/vendors/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(form)
            })

            let data = await response.json()

            if (!response.ok) throw new Error(data.message || data.reason || "Unable to create profile.")

            navigate("/profile")
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold mb-1">Create Vendor Profile</h4>
            <p className="text-muted mb-4">Complete your business profile.</p>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={postSubmit}>
                <div className="card mb-4">
                    <div className="card-header"><h5 className="mb-0">Business Information</h5></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 mb-3"><label className="form-label">Category</label><input name="category" className="form-control" value={form.category} onChange={changeInput} required /></div>
                            <div className="col-md-6 mb-3"><label className="form-label">Business Name</label><input name="businessName" className="form-control" value={form.businessName} onChange={changeInput} required /></div>
                            <div className="col-md-6 mb-3"><label className="form-label">Business Type</label><select name="businessType" className="form-select" value={form.businessType} onChange={changeInput}><option value="individual">Individual</option><option value="company">Company</option><option value="partnership">Partnership</option></select></div>
                            <div className="col-md-6 mb-3"><label className="form-label">Business Email</label><input type="email" name="businessEmail" className="form-control" value={form.businessEmail} onChange={changeInput} /></div>
                            <div className="col-md-6 mb-3"><label className="form-label">Business Phone</label><input name="businessPhone" className="form-control" value={form.businessPhone} onChange={changeInput} /></div>
                            <div className="col-md-6 mb-3"><label className="form-label">Alternate Business Phone</label><input name="alternateBusinessPhone" className="form-control" value={form.alternateBusinessPhone} onChange={changeInput} /></div>
                            <div className="col-md-6 mb-3"><label className="form-label">Established Year</label><input type="number" name="establishedYear" className="form-control" value={form.establishedYear} onChange={changeInput} /></div>
                            <div className="col-12 mb-3"><label className="form-label">Website</label><input type="url" name="website" className="form-control" value={form.website} onChange={changeInput} /></div>
                            <div className="col-12"><label className="form-label">Description</label><textarea name="description" rows="4" className="form-control" value={form.description} onChange={changeInput}></textarea></div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header"><h5 className="mb-0">Address</h5></div>
                    <div className="card-body">
                        <div className="row">
                            {["country", "state", "city", "locality", "pincode", "landmark"].map((name) => (
                                <div className="col-md-6 mb-3" key={name}>
                                    <label className="form-label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                                    <input name={name} className="form-control" value={form.address[name]} onChange={changeAddress} />
                                </div>
                            ))}
                            <div className="col-12"><label className="form-label">Full Address</label><textarea name="fullAddress" rows="3" className="form-control" value={form.address.fullAddress} onChange={changeAddress}></textarea></div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header"><h5 className="mb-0">Social Links</h5></div>
                    <div className="card-body">
                        <div className="row">
                            {["facebook", "instagram", "youtube"].map((name) => (
                                <div className="col-md-4 mb-3" key={name}>
                                    <label className="form-label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                                    <input type="url" name={name} className="form-control" value={form.socialLinks[name]} onChange={changeSocial} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary">
                    {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                    {loading ? "Please wait..." : "Create Profile"}
                </button>
            </form>
        </div>
    )
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../Redux/ActionCreators/ProfileActionCreators";

export default function EditProfilePage() {
  let [form, setForm] = useState({
    businessName: "",
    businessType: "individual",
    businessEmail: "",
    businessPhone: "",
    alternateBusinessPhone: "",
    description: "",
    website: "",
    establishedYear: "",
    address: {
      country: "",
      state: "",
      city: "",
      locality: "",
      pincode: "",
      landmark: "",
      fullAddress: "",
    },
    socialLinks: {
      facebook: "",
      instagram: "",
      youtube: "",
    },
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let state = useSelector((value) => value.ProfileReducer);
  let error = useSelector((value) => value.ApiReducer.error);
  let loading = state.loading && !state.profile;
  let saving = state.loading;
  let [success, setSuccess] = useState("");

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (state.response?.result === "Done" && state.response?.message) {
      setSuccess(state.response.message);
    }
  }, [state.response]);

  useEffect(() => {
    if (state.profile) {
      let profile = state.profile;

      setForm((value) => ({
        ...value,
        ...profile,
        address: { ...value.address, ...(profile.address || {}) },
        socialLinks: { ...value.socialLinks, ...(profile.socialLinks || {}) },
      }));
    }
  }, [state.profile]);

  function changeInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function changeAddress(e) {
    setForm({
      ...form,
      address: { ...form.address, [e.target.name]: e.target.value },
    });
  }

  function changeSocial(e) {
    setForm({
      ...form,
      socialLinks: { ...form.socialLinks, [e.target.name]: e.target.value },
    });
  }

  function postSubmit(e) {
    e.preventDefault();
    setSuccess("");
    dispatch(updateProfile(form));
  }

  if (loading) {
    return (
      <div className="container-xxl container-p-y text-center">
        <span className="spinner-border text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Edit Vendor Profile</h4>
          <p className="text-muted mb-0">Update your business information.</p>
        </div>
        <Link to="/profile" className="btn btn-label-secondary">
          Back to Profile
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={postSubmit}>
        <div className="card mb-4">
          <div className="card-header">
            <h5 className="mb-0">Business Information</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Business Name</label>
                <input name="businessName" className="form-control" value={form.businessName} onChange={changeInput} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Business Type</label>
                <select name="businessType" className="form-select" value={form.businessType} onChange={changeInput}>
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Business Email</label>
                <input type="email" name="businessEmail" className="form-control" value={form.businessEmail} onChange={changeInput} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Business Phone</label>
                <input name="businessPhone" className="form-control" value={form.businessPhone} onChange={changeInput} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Alternate Business Phone</label>
                <input name="alternateBusinessPhone" className="form-control" value={form.alternateBusinessPhone} onChange={changeInput} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Established Year</label>
                <input type="number" name="establishedYear" className="form-control" value={form.establishedYear} onChange={changeInput} />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Website</label>
                <input type="url" name="website" className="form-control" value={form.website} onChange={changeInput} placeholder="https://example.com" />
              </div>
              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea name="description" rows="4" className="form-control" value={form.description} onChange={changeInput}></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5 className="mb-0">Business Address</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {["country", "state", "city", "locality", "pincode", "landmark"].map((name) => (
                <div className="col-md-6 mb-3" key={name}>
                  <label className="form-label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                  <input name={name} className="form-control" value={form.address[name]} onChange={changeAddress} />
                </div>
              ))}
              <div className="col-12">
                <label className="form-label">Full Address</label>
                <textarea name="fullAddress" rows="3" className="form-control" value={form.address.fullAddress} onChange={changeAddress}></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5 className="mb-0">Social Links</h5>
          </div>
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

        <div className="d-flex gap-2">
          <button type="submit" disabled={saving} className="btn btn-primary">
            {saving && <span className="spinner-border spinner-border-sm me-2"></span>}
            {saving ? "Please wait..." : "Save Changes"}
          </button>
          <Link to="/profile" className="btn btn-label-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUserDetails, updateUser } from "../../../Redux/ActionCreators/UserActionCreators";
import TextValidators from "../../../Validators/TextValidators";
export default function UserFormPage() {
  let { id } = useParams();
  let editing = Boolean(id);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let state = useSelector((s) => s.UserReducer);
  let apiError = useSelector((s) => s.ApiReducer.error);
  let [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "vendor",
    accountType: "business",
    status: "active",
    isEmailVerified: true,
    isPhoneVerified: true,
    isProfileCompleted: false,
  });
  let [error, setError] = useState("");
  useEffect(() => {
    if (editing) dispatch(getUserDetails(id));
  }, [id]);
  useEffect(() => {
    if (editing && state.selectedUser) setForm((v) => ({ ...v, ...state.selectedUser, password: "", confirmPassword: "" }));
  }, [state.selectedUser]);
  useEffect(() => {
    if (state.response?.result === "Done" && (state.response?.message === "User account created successfully." || state.response?.message === "User account updated successfully.")) navigate("/users");
  }, [state.response]);
  function change(e) {
    setError(TextValidators(e));
    setForm({ ...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    if (error) return;
    let data = { ...form };
    if (editing) {
      delete data.confirmPassword;
      if (!data.password) delete data.password;
      dispatch(updateUser({ id, data }));
    } else dispatch(createUser(data));
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">{editing ? "Edit" : "Create"} User</h4>
        <Link to="/users" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {(error || apiError) && <div className="alert alert-danger">{error || apiError}</div>}
      <form onSubmit={submit}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              {["name", "username", "email", "phone"].map((name) => (
                <div className="col-md-6 mb-3" key={name}>
                  <label className="form-label">{name}</label>
                  <input className="form-control" name={name} value={form[name]} onChange={change} />
                </div>
              ))}
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={form.password} onChange={change} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="confirmPassword" value={form.confirmPassword} onChange={change} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Role</label>
                <select className="form-select" name="role" value={form.role} onChange={change}>
                  <option value="super_admin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="vendor">Vendor</option>
                  <option value="customer">Customer</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Account Type</label>
                <select className="form-select" name="accountType" value={form.accountType} onChange={change}>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                </select>
              </div>
              {editing && (
                <>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" name="status" value={form.status} onChange={change}>
                      <option value="pending">Pending</option>
                      <option value="active">Active</option>
                      <option value="blocked">Blocked</option>
                      <option value="deleted">Deleted</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-check">
                      <input className="form-check-input" type="checkbox" name="isProfileCompleted" checked={form.isProfileCompleted} onChange={change} />
                      <span className="form-check-label">Profile Completed</span>
                    </label>
                  </div>
                </>
              )}
            </div>
            <button className="btn btn-primary">{editing ? "Save Changes" : "Create User"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser } from "../../../Redux/ActionCreators/UserActionCreators";

export default function UserListPage() {
  let [search, setSearch] = useState("");
  let [role, setRole] = useState("");
  let [status, setStatus] = useState("");
  let dispatch = useDispatch();
  let state = useSelector((state) => state.UserReducer);
  let error = useSelector((state) => state.ApiReducer.error);

  function loadUsers() {
    let params = new URLSearchParams({ page: "1", limit: "100" });
    if (search) params.set("search", search);
    if (role) params.set("role", role);
    if (status) params.set("status", status);
    dispatch(getUser({ query: params.toString() }));
  }
  useEffect(() => {
    loadUsers();
  }, []);

  function removeUser(id) {
    if (window.confirm("Are you sure you want to delete this user?")) dispatch(deleteUser(id));
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">User Accounts</h4>
          <p className="text-muted mb-0">Super Admin only.</p>
        </div>
        <Link to="/users/create" className="btn btn-primary">
          Create User
        </Link>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card">
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-md-4">
              <input className="form-control" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="col-md-3">
              <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">All Roles</option>
                <option value="super_admin">Super Admin</option>
                <option value="admin">Admin</option>
                <option value="vendor">Vendor</option>
                <option value="customer">Customer</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
                <option value="deleted">Deleted</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={loadUsers}>
                Search
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.users.map((user) => {
                  let id = user._id || user.id;
                  return (
                    <tr key={id}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.role}</td>
                      <td>{user.status}</td>
                      <td>
                        <Link className="btn btn-sm btn-icon me-1" to={`/users/${id}`}>
                          <i className="ti ti-eye"></i>
                        </Link>
                        <Link className="btn btn-sm btn-icon me-1" to={`/users/${id}/edit`}>
                          <i className="ti ti-edit"></i>
                        </Link>
                        <button className="btn btn-sm btn-icon text-danger" onClick={() => removeUser(id)}>
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {!state.users.length && (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVenueCategory, activateVenueCategory, deactivateVenueCategory } from "../../../Redux/ActionCreators/VenueCategoryActionCreators";
export default function VenueCategoryListPage() {
  let [search, setSearch] = useState("");
  let dispatch = useDispatch();
  let state = useSelector((s) => s.VenueCategoryReducer);
  let error = useSelector((s) => s.ApiReducer.error);
  function load() {
    let p = new URLSearchParams({ page: "1", limit: "100" });
    if (search) p.set("search", search);
    dispatch(getVenueCategory({ query: p.toString() }));
  }
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Venue Categories</h4>
        <Link to="/venue-categories/create" className="btn btn-primary">
          Create Category
        </Link>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card">
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-md-10">
              <input className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search category" />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={load}>
                Search
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Sort</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.sortOrder}</td>
                    <td>{item.isActive ? "Active" : "Inactive"}</td>
                    <td>
                      <Link className="btn btn-sm btn-icon me-1" to={`/venue-categories/${item._id}`}>
                        <i className="ti ti-eye" />
                      </Link>
                      <Link className="btn btn-sm btn-icon me-1" to={`/venue-categories/${item._id}/edit`}>
                        <i className="ti ti-edit" />
                      </Link>
                      <button className="btn btn-sm btn-icon" onClick={() => dispatch(item.isActive ? deactivateVenueCategory(item._id) : activateVenueCategory(item._id))}>
                        <i className={item.isActive ? "ti ti-ban" : "ti ti-check"} />
                      </button>
                    </td>
                  </tr>
                ))}
                {!state.items.length && (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No categories found.
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

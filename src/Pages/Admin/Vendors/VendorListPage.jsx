import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVendor } from "../../../Redux/ActionCreators/VendorActionCreators";
export default function VendorListPage() {
  let [search, setSearch] = useState("");
  let dispatch = useDispatch();
  let state = useSelector((s) => s.VendorReducer);
  let error = useSelector((s) => s.ApiReducer.error);
  function load() {
    let p = new URLSearchParams({ page: "1", limit: "100" });
    if (search) p.set("search", search);
    dispatch(getVendor({ query: p.toString() }));
  }
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-4">Vendors</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card">
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-md-10">
              <input className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
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
                  <th>Business</th>
                  <th>Owner</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.businessName}</td>
                    <td>{item.user?.name || "-"}</td>
                    <td>{item.category?.name || "-"}</td>
                    <td>{item.businessType}</td>
                    <td>
                      <Link className="btn btn-sm btn-icon" to={`/vendors/${item._id}`}>
                        <i className="ti ti-eye" />
                      </Link>
                    </td>
                  </tr>
                ))}
                {!state.items.length && (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No vendors found.
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

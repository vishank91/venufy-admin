import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../Redux/ActionCreators/UserActionCreators";
export default function UserDetailsPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let state = useSelector((s) => s.UserReducer);
  let error = useSelector((s) => s.ApiReducer.error);
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [id]);
  let user = state.selectedUser;
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">User Details</h4>
        <Link to="/users" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {!user ? (
        <div className="text-center py-5">
          <span className="spinner-border" />
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="row">
              {Object.entries(user)
                .filter(([key]) => !["_id", "password"].includes(key))
                .map(([key, value]) => (
                  <div className="col-md-6 mb-3" key={key}>
                    <small className="text-muted">{key}</small>
                    <div className="fw-semibold">{typeof value === "object" ? JSON.stringify(value) : String(value)}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

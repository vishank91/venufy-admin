import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVendorCategoryDetails } from "../../../Redux/ActionCreators/VendorCategoryActionCreators";
export default function VendorCategoryDetailsPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let item = useSelector((s) => s.VendorCategoryReducer.selected);
  let error = useSelector((s) => s.ApiReducer.error);
  useEffect(() => {
    dispatch(getVendorCategoryDetails(id));
  }, [id]);
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">Vendor Category Details</h4>
        <Link to="/vendor-categories" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {!item ? (
        <div className="text-center py-5">
          <span className="spinner-border" />
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : String(value)}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

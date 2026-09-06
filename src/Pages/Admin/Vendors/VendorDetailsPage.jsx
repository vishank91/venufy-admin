import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVendorDetails } from "../../../Redux/ActionCreators/VendorActionCreators";
export default function VendorDetailsPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let vendor = useSelector((s) => s.VendorReducer.selected);
  let error = useSelector((s) => s.ApiReducer.error);
  useEffect(() => {
    dispatch(getVendorDetails(id));
  }, [id]);
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">Vendor Details</h4>
        <Link to="/vendors" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {!vendor ? (
        <div className="text-center py-5">
          <span className="spinner-border" />
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5>{vendor.businessName}</h5>
            <p>{vendor.description || "-"}</p>
            <hr />
            {Object.entries(vendor)
              .filter(([key]) => !["_id", "user", "category", "kyc", "address", "socialLinks"].includes(key))
              .map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {String(value)}
                </p>
              ))}
            <p>
              <strong>Owner:</strong> {vendor.user?.name} ({vendor.user?.email})
            </p>
            <p>
              <strong>Category:</strong> {vendor.category?.name}
            </p>
            <p>
              <strong>Address:</strong> {vendor.address?.fullAddress}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVenueDetails } from "../../../Redux/ActionCreators/VenueActionCreators";
export default function VenueDetailsPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let venue = useSelector((s) => s.VenueReducer.selected);
  let error = useSelector((s) => s.ApiReducer.error);
  useEffect(() => {
    dispatch(getVenueDetails(id));
  }, [id]);
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">Venue Details</h4>
        <Link to="/venues" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {!venue ? (
        <div className="text-center py-5">
          <span className="spinner-border" />
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5>{venue.venueName}</h5>
            <p>{venue.description}</p>
            <p>
              <strong>Vendor:</strong> {venue.vendor?.businessName || "-"}
            </p>
            <p>
              <strong>Category:</strong> {venue.category?.name || "-"}
            </p>
            <p>
              <strong>Capacity:</strong> {venue.minCapacity} - {venue.maxCapacity}
            </p>
            <p>
              <strong>Price/Day:</strong> {venue.pricePerDay ?? "-"}
            </p>
            <p>
              <strong>Address:</strong> {venue.address?.fullAddress}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

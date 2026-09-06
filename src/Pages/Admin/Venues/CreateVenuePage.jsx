import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createVenue } from "../../../Redux/ActionCreators/VenueActionCreators";
import { getVenueCategory } from "../../../Redux/ActionCreators/VenueCategoryActionCreators";
import TextValidators from "../../../Validators/TextValidators";
export default function CreateVenuePage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let categories = useSelector((s) => s.VenueCategoryReducer.items);
  let venueState = useSelector((s) => s.VenueReducer);
  let error = useSelector((s) => s.ApiReducer.error);
  let [form, setForm] = useState({
    category: "",
    venueName: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    pricePerDay: "",
    minCapacity: "",
    maxCapacity: "",
    address: { country: "India", state: "", city: "", locality: "", pincode: "", fullAddress: "" },
  });
  let [validation, setValidation] = useState("");
  useEffect(() => {
    dispatch(getVenueCategory({ query: "page=1&limit=100&isActive=true" }));
  }, []);
  useEffect(() => {
    if (venueState.response?.result === "Done" && venueState.response?.message === "Venue created successfully.") navigate("/venue/profile/edit");
  }, [venueState.response]);
  function change(e) {
    setValidation(TextValidators(e));
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function address(e) {
    setForm({ ...form, address: { ...form.address, [e.target.name]: e.target.value } });
  }
  function submit(e) {
    e.preventDefault();
    if (validation) return;
    dispatch(createVenue({ ...form, pricePerDay: form.pricePerDay === "" ? undefined : Number(form.pricePerDay), minCapacity: Number(form.minCapacity), maxCapacity: Number(form.maxCapacity) }));
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">Create Venue</h4>
        <Link to="/profile" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {(validation || error) && <div className="alert alert-danger">{validation || error}</div>}
      <form onSubmit={submit}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Venue Name</label>
                <input className="form-control" name="venueName" value={form.venueName} onChange={change} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <select className="form-select" name="category" value={form.category} onChange={change}>
                  <option value="">Select Category</option>
                  {categories.map((x) => (
                    <option key={x._id} value={x._id}>
                      {x.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Contact Email</label>
                <input className="form-control" name="contactEmail" value={form.contactEmail} onChange={change} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Contact Phone</label>
                <input className="form-control" name="contactPhone" value={form.contactPhone} onChange={change} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Price Per Day</label>
                <input type="number" className="form-control" name="pricePerDay" value={form.pricePerDay} onChange={change} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Min Capacity</label>
                <input type="number" className="form-control" name="minCapacity" value={form.minCapacity} onChange={change} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Max Capacity</label>
                <input type="number" className="form-control" name="maxCapacity" value={form.maxCapacity} onChange={change} />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" name="description" value={form.description} onChange={change} />
              </div>
              {["state", "city", "locality", "pincode", "fullAddress"].map((name) => (
                <div className={name === "fullAddress" ? "col-12 mb-3" : "col-md-6 mb-3"} key={name}>
                  <label className="form-label">{name}</label>
                  {name === "fullAddress" ? (
                    <textarea className="form-control" name={name} value={form.address[name]} onChange={address} />
                  ) : (
                    <input className="form-control" name={name} value={form.address[name]} onChange={address} />
                  )}
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Create Venue</button>
          </div>
        </div>
      </form>
    </div>
  );
}

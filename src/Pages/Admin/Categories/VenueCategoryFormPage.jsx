import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createVenueCategory, getVenueCategoryDetails, updateVenueCategory } from "../../../Redux/ActionCreators/VenueCategoryActionCreators";
import TextValidators from "../../../Validators/TextValidators";
export default function VenueCategoryFormPage() {
  let { id } = useParams();
  let editing = Boolean(id);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [form, setForm] = useState({ name: "", description: "", sortOrder: 0, icon: "", image: "" });
  let [error, setError] = useState("");
  let state = useSelector((s) => s.VenueCategoryReducer);
  let apiError = useSelector((s) => s.ApiReducer.error);
  useEffect(() => {
    if (editing) dispatch(getVenueCategoryDetails(id));
  }, [id]);
  useEffect(() => {
    if (editing && state.selected) setForm((v) => ({ ...v, ...state.selected }));
  }, [state.selected]);
  useEffect(() => {
    if (state.response?.result === "Done" && (state.response?.message === "Venue category created successfully." || state.response?.message === "Venue category updated successfully."))
      navigate("/venue-categories");
  }, [state.response]);
  function changeInput(e) {
    let error = TextValidators(e);
    setError(error);
    setForm({ ...form, [e.target.name]: e.target.name === "sortOrder" ? Number(e.target.value) : e.target.value });
  }
  function postSubmit(e) {
    e.preventDefault();
    if (error) return;
    editing ? dispatch(updateVenueCategory({ id, data: form })) : dispatch(createVenueCategory(form));
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">{editing ? "Edit" : "Create"} Venue Category</h4>
        <Link to="/venue-categories" className="btn btn-label-secondary">
          Back
        </Link>
      </div>
      {(error || apiError) && <div className="alert alert-danger">{error || apiError}</div>}
      <form onSubmit={postSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" name="name" value={form.name} onChange={changeInput} />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Sort Order</label>
                <input type="number" className="form-control" name="sortOrder" value={form.sortOrder} onChange={changeInput} />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Icon</label>
                <input className="form-control" name="icon" value={form.icon || ""} onChange={changeInput} />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Image</label>
                <input className="form-control" name="image" value={form.image || ""} onChange={changeInput} />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" name="description" value={form.description || ""} onChange={changeInput} />
              </div>
            </div>
            <button className="btn btn-primary">{editing ? "Save Changes" : "Create Category"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

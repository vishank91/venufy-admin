import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVenueImages, createVenueImage, deleteVenueImage, primaryVenueImage, reorderVenueImage } from "../../../Redux/ActionCreators/VenueImageActionCreators";
import ImageValidators from "../../../Validators/ImageValidators";
export default function VenueImagesPage() {
  let dispatch = useDispatch();
  let state = useSelector((s) => s.VenueImageReducer);
  let error = useSelector((s) => s.ApiReducer.error);
  let [files, setFiles] = useState([]);
  let [validation, setValidation] = useState("");
  useEffect(() => {
    dispatch(getVenueImages());
  }, []);
  function selectFiles(e) {
    setValidation(ImageValidators(e));
    setFiles(e.target.files);
  }
  function upload(e) {
    e.preventDefault();
    if (!files.length || validation) return;
    let formData = new FormData();
    Array.from(files).forEach((file) => formData.append("images", file));
    dispatch(createVenueImage(formData));
    e.target.reset();
    setFiles([]);
  }
  function action(id, type) {
    if (type === "delete") dispatch(deleteVenueImage(id));
    else dispatch(primaryVenueImage(id));
  }
  function reorder() {
    let ids = [...(state.images || [])].sort((a, b) => a.sortOrder - b.sortOrder).map((x) => x._id);
    dispatch(reorderVenueImage(ids));
  }
  let api = import.meta.env.VITE_APP_BACKEND_SERVER;
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-4">Venue Images</h4>
      {(validation || error) && <div className="alert alert-danger">{validation || error}</div>}
      {!state.venue ? (
        <div className="alert alert-warning">Create your venue profile first.</div>
      ) : (
        <>
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={upload}>
                <div className="row align-items-end">
                  <div className="col-md-9 mb-3">
                    <label className="form-label">Images</label>
                    <input id="venue-images-input" type="file" multiple accept="image/*" className="form-control" onChange={selectFiles} />
                  </div>
                  <div className="col-md-3 mb-3">
                    <button className="btn btn-primary w-100">Upload Images</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            {state.images.map((image) => (
              <div className="col-md-4 col-lg-3 mb-4" key={image._id}>
                <div className="card h-100">
                  <img src={`${api}${image.url}`} className="card-img-top" style={{ height: "180px", objectFit: "cover" }} alt={image.alt || "Venue"} />
                  <div className="card-body">
                    <div className="mb-2">{image.isPrimary && <span className="badge bg-primary">Primary</span>}</div>
                    <button className="btn btn-sm btn-outline-primary me-2" disabled={image.isPrimary} onClick={() => action(image._id, "primary")}>
                      Primary
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => action(image._id, "delete")}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {state.images.length > 1 && (
            <button className="btn btn-label-secondary" onClick={reorder}>
              Save Current Order
            </button>
          )}
        </>
      )}
    </div>
  );
}

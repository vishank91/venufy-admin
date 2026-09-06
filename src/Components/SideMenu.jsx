import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideMenu() {
  let [venueOpen, setVenueOpen] = useState(false);
  let [managementOpen, setManagementOpen] = useState(false);
  let user = useSelector((state) => state.AuthReducer.user) || {};
  let role = user.role;
  let canManage = ["admin", "super_admin"].includes(role);
  let isSuperAdmin = role === "super_admin";

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bold">Venuefy</span>
        </Link>
      </div>
      <ul className="menu-inner py-1">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <i className="menu-icon tf-icons ti ti-home"></i>
            <div>Dashboard</div>
          </Link>
        </li>
        {isSuperAdmin && (
          <li className="menu-item">
            <Link to="/users" className="menu-link">
              <i className="menu-icon tf-icons ti ti-users"></i>
              <div>Users</div>
            </Link>
          </li>
        )}
        {canManage && (
          <>
            <li className={`menu-item ${managementOpen ? "open" : ""}`}>
              <button className="menu-link w-100 border-0 bg-transparent text-start" onClick={() => setManagementOpen(!managementOpen)}>
                <i className="menu-icon tf-icons ti ti-category"></i>
                <div>Management</div>
                <i className="menu-arrow"></i>
              </button>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link className="menu-link" to="/vendor-categories">
                    <div>Vendor Categories</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/venue-categories">
                    <div>Venue Categories</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/vendors">
                    <div>Vendors</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-link" to="/venues">
                    <div>Venues</div>
                  </Link>
                </li>
              </ul>
            </li>
          </>
        )}
        {role === "vendor" && (
          <li className={`menu-item ${venueOpen ? "open" : ""}`}>
            <button className="menu-link w-100 border-0 bg-transparent text-start" onClick={() => setVenueOpen(!venueOpen)}>
              <i className="menu-icon tf-icons ti ti-building"></i>
              <div>My Venue</div>
              <i className="menu-arrow"></i>
            </button>
            <ul className="menu-sub">
              <li className="menu-item">
                <Link className="menu-link" to="/venue/profile/edit">
                  <div>Venue Profile</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/venue/images">
                  <div>Venue Images</div>
                </Link>
              </li>
            </ul>
          </li>
        )}
        <li className="menu-item">
          <Link to="/profile" className="menu-link">
            <i className="menu-icon tf-icons ti ti-user"></i>
            <div>Profile</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

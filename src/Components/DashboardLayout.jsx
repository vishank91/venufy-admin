import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SideMenu />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <Outlet />
            <Footer />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

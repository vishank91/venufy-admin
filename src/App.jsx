import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./Components/DashboardLayout";
import HomePage from "./Pages/HomePage";

import ErrorPage from "./Pages/Authentication/ErrorPage";
import SignupPage from "./Pages/Authentication/SignupPage";
import LoginPage from "./Pages/Authentication/LoginPage";
import VerifyPhonePage from "./Pages/Authentication/VerifyPhonePage";
import VerifyEmailPage from "./Pages/Authentication/VerifyEmailPage";
import ForgotPasswordPage from "./Pages/Authentication/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/Authentication/ResetPasswordPage";

import ProfilePage from "./Pages/Profile/ProfilePage";
import CreateProfilePage from "./Pages/Profile/CreateProfilePage";
import EditProfilePage from "./Pages/Profile/EditProfilePage";
import ChangePasswordPage from "./Pages/Profile/ChangePasswordPage";

import UserListPage from "./Pages/Admin/Users/UserListPage";
import CreateUserPage from "./Pages/Admin/Users/CreateUserPage";
import EditUserPage from "./Pages/Admin/Users/EditUserPage";
import UserDetailsPage from "./Pages/Admin/Users/UserDetailsPage";

import VendorCategoryListPage from "./Pages/Admin/Categories/VendorCategoryListPage";
import VendorCategoryFormPage from "./Pages/Admin/Categories/VendorCategoryFormPage";
import VendorCategoryDetailsPage from "./Pages/Admin/Categories/VendorCategoryDetailsPage";

import VenueCategoryListPage from "./Pages/Admin/Categories/VenueCategoryListPage";
import VenueCategoryFormPage from "./Pages/Admin/Categories/VenueCategoryFormPage";
import VenueCategoryDetailsPage from "./Pages/Admin/Categories/VenueCategoryDetailsPage";

import VendorListPage from "./Pages/Admin/Vendors/VendorListPage";
import VendorDetailsPage from "./Pages/Admin/Vendors/VendorDetailsPage";

import VenueListPage from "./Pages/Admin/Venues/VenueListPage";
import VenueDetailsPage from "./Pages/Admin/Venues/VenueDetailsPage";
import CreateVenuePage from "./Pages/Admin/Venues/CreateVenuePage";
import EditVenuePage from "./Pages/Admin/Venues/EditVenuePage";
import VenueImagesPage from "./Pages/Admin/Venues/VenueImagesPage";

function ProtectedRoute({ children, roles }) {
  let token = localStorage.getItem("token");
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem("user") || "{}");
  } catch (error) {
    user = {};
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-phone" element={<VerifyPhonePage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route
          element={
            <ProtectedRoute roles={["vendor", "admin", "super_admin"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<HomePage />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/create"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <CreateProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <EditProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/change-password"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <ChangePasswordPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/venue/profile"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <EditVenuePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue/profile/create"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <CreateVenuePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue/profile/edit"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <EditVenuePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue/images"
            element={
              <ProtectedRoute roles={["vendor"]}>
                <VenueImagesPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute roles={["super_admin"]}>
                <UserListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/create"
            element={
              <ProtectedRoute roles={["super_admin"]}>
                <CreateUserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute roles={["super_admin"]}>
                <UserDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/edit"
            element={
              <ProtectedRoute roles={["super_admin"]}>
                <EditUserPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vendor-categories"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VendorCategoryListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor-categories/create"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VendorCategoryFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor-categories/:id"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VendorCategoryDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor-categories/:id/edit"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VendorCategoryFormPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/venue-categories"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VenueCategoryListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue-categories/create"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VenueCategoryFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue-categories/:id"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VenueCategoryDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venue-categories/:id/edit"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VenueCategoryFormPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vendors"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VendorListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendors/:id"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VendorDetailsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/venues"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VenueListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/venues/:id"
            element={
              <ProtectedRoute roles={["admin", "super_admin"]}>
                <VenueDetailsPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

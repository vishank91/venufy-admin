import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  VERIFY_EMAIL,
  VERIFY_PHONE,
  RESEND_EMAIL,
  RESEND_OTP,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  REFRESH_TOKEN,
  LOGOUT_ALL_DEVICES,
  DASHBOARD_ACCESS,
} from "../Constant";

export function login(data) {
  return { type: LOGIN, payload: data };
}

export function logout(data) {
  return { type: LOGOUT, payload: data };
}

export function signup(data) {
  return { type: SIGNUP, payload: data };
}

export function verifyEmail(data) {
  return { type: VERIFY_EMAIL, payload: data };
}

export function verifyPhone(data) {
  return { type: VERIFY_PHONE, payload: data };
}

export function resendEmail(data) {
  return { type: RESEND_EMAIL, payload: data };
}

export function resendOtp(data) {
  return { type: RESEND_OTP, payload: data };
}

export function forgotPassword(data) {
  return { type: FORGOT_PASSWORD, payload: data };
}

export function resetPassword(data) {
  return { type: RESET_PASSWORD, payload: data };
}

export function changePassword(data) {
  return { type: CHANGE_PASSWORD, payload: data };
}

export function refreshToken(data) {
  return { type: REFRESH_TOKEN, payload: data };
}

export function logoutAllDevices() {
  return { type: LOGOUT_ALL_DEVICES };
}

export function dashboardAccess() {
  return { type: DASHBOARD_ACCESS };
}

import { put, takeEvery } from "redux-saga/effects";
import {
  LOGIN,
  LOGIN_RED,
  LOGOUT,
  LOGOUT_RED,
  SIGNUP,
  SIGNUP_RED,
  VERIFY_EMAIL,
  VERIFY_EMAIL_RED,
  VERIFY_PHONE,
  VERIFY_PHONE_RED,
  RESEND_EMAIL,
  RESEND_EMAIL_RED,
  RESEND_OTP,
  RESEND_OTP_RED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_RED,
  RESET_PASSWORD,
  RESET_PASSWORD_RED,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_RED,
  REFRESH_TOKEN,
  REFRESH_TOKEN_RED,
  LOGOUT_ALL_DEVICES,
  LOGOUT_ALL_DEVICES_RED,
  DASHBOARD_ACCESS,
  DASHBOARD_ACCESS_RED,
  AUTH_ERROR,
  CLEAR_AUTH,
} from "../Constant";
import { authRecord } from "./APICallingService";

function getReason(data) {
  if (typeof data.reason === "object") {
    return Object.values(data.reason || {}).join(", ");
  }

  return data.reason || data.message || "Request failed.";
}

function clearLoginData() {
  localStorage.removeItem("token");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  localStorage.removeItem("login");
}

function* loginSaga(action) {
  let result = yield authRecord("login", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  let data = result.data.data || {};

  localStorage.setItem("token", data.accessToken || "");
  localStorage.setItem("accessToken", data.accessToken || "");
  localStorage.setItem("refreshToken", data.refreshToken || "");
  localStorage.setItem("user", JSON.stringify(data.user || {}));
  localStorage.setItem("login", "true");

  yield put({ type: LOGIN_RED, payload: data });
}

function* logoutSaga(action) {
  let refreshToken = localStorage.getItem("refreshToken");
  let result = yield authRecord("logout", { refreshToken });

  clearLoginData();

  yield put({ type: LOGOUT_RED, payload: result.data });
  yield put({ type: CLEAR_AUTH });
}

function* signupSaga(action) {
  let result = yield authRecord("signup", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: SIGNUP_RED, payload: result.data.data || result.data });
}

function* verifyEmailSaga(action) {
  let result = yield authRecord(`verify-email?token=${encodeURIComponent(action.payload)}`, undefined, "GET");

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: VERIFY_EMAIL_RED, payload: result.data.data || result.data });
}

function* verifyPhoneSaga(action) {
  let result = yield authRecord("verify-phone", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: VERIFY_PHONE_RED, payload: result.data.data || result.data });
}

function* resendEmailSaga(action) {
  let result = yield authRecord("resend-email", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: RESEND_EMAIL_RED, payload: result.data });
}

function* resendOtpSaga(action) {
  let result = yield authRecord("resend-otp", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: RESEND_OTP_RED, payload: result.data });
}

function* forgotPasswordSaga(action) {
  let result = yield authRecord("forgot-password", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: FORGOT_PASSWORD_RED, payload: result.data });
}

function* resetPasswordSaga(action) {
  let result = yield authRecord("reset-password", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: RESET_PASSWORD_RED, payload: result.data });
}

function* changePasswordSaga(action) {
  let result = yield authRecord("change-password", action.payload);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  clearLoginData();

  yield put({ type: CHANGE_PASSWORD_RED, payload: result.data });
  yield put({ type: CLEAR_AUTH });
}

function* refreshTokenSaga(action) {
  let token = action.payload || localStorage.getItem("refreshToken");
  let result = yield authRecord("refresh-token", { refreshToken: token });

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  localStorage.setItem("token", result.data.data.accessToken);
  localStorage.setItem("accessToken", result.data.data.accessToken);
  localStorage.setItem("refreshToken", result.data.data.refreshToken);

  yield put({ type: REFRESH_TOKEN_RED, payload: result.data.data });
}

function* logoutAllSaga() {
  let result = yield authRecord("logout-all-devices", undefined);

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  clearLoginData();

  yield put({ type: LOGOUT_ALL_DEVICES_RED, payload: result.data });
  yield put({ type: CLEAR_AUTH });
}

function* dashboardAccessSaga() {
  let result = yield authRecord("dashboard-access", undefined, "GET");

  if (!result.response.ok || result.data.result === "Fail") {
    yield put({ type: AUTH_ERROR, payload: getReason(result.data) });
    return;
  }

  yield put({ type: DASHBOARD_ACCESS_RED, payload: result.data });
}

export default function* AuthSagas() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(SIGNUP, signupSaga);
  yield takeEvery(VERIFY_EMAIL, verifyEmailSaga);
  yield takeEvery(VERIFY_PHONE, verifyPhoneSaga);
  yield takeEvery(RESEND_EMAIL, resendEmailSaga);
  yield takeEvery(RESEND_OTP, resendOtpSaga);
  yield takeEvery(FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeEvery(RESET_PASSWORD, resetPasswordSaga);
  yield takeEvery(CHANGE_PASSWORD, changePasswordSaga);
  yield takeEvery(REFRESH_TOKEN, refreshTokenSaga);
  yield takeEvery(LOGOUT_ALL_DEVICES, logoutAllSaga);
  yield takeEvery(DASHBOARD_ACCESS, dashboardAccessSaga);
}

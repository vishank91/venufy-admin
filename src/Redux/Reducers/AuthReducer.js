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
  LOGIN_RED,
  LOGOUT_RED,
  SIGNUP_RED,
  VERIFY_EMAIL_RED,
  VERIFY_PHONE_RED,
  RESEND_EMAIL_RED,
  RESEND_OTP_RED,
  FORGOT_PASSWORD_RED,
  RESET_PASSWORD_RED,
  CHANGE_PASSWORD_RED,
  REFRESH_TOKEN_RED,
  AUTH_ERROR,
  CLEAR_AUTH,
  LOGOUT_ALL_DEVICES_RED,
  DASHBOARD_ACCESS_RED,
} from "../Constant";

let user = {};

try {
  user = JSON.parse(localStorage.getItem("user") || "{}");
} catch (error) {
  user = {};
}

let initialState = {
  user,
  isLoggedIn: Boolean(localStorage.getItem("token")),
  loading: false,
  error: "",
  response: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
    case SIGNUP:
    case VERIFY_EMAIL:
    case VERIFY_PHONE:
    case RESEND_EMAIL:
    case RESEND_OTP:
    case FORGOT_PASSWORD:
    case RESET_PASSWORD:
    case CHANGE_PASSWORD:
    case REFRESH_TOKEN:
      return { ...state, loading: true, error: "" };

    case LOGIN_RED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user || {},
        loading: false,
        error: "",
        response: { result: "Done", ...action.payload },
      };

    case LOGOUT_RED:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        loading: false,
        error: "",
        response: action.payload,
      };

    case SIGNUP_RED:
    case VERIFY_EMAIL_RED:
    case VERIFY_PHONE_RED:
    case RESEND_EMAIL_RED:
    case RESEND_OTP_RED:
    case FORGOT_PASSWORD_RED:
    case RESET_PASSWORD_RED:
    case CHANGE_PASSWORD_RED:
    case REFRESH_TOKEN_RED:
    case LOGOUT_ALL_DEVICES_RED:
    case DASHBOARD_ACCESS_RED:
      return {
        ...state,
        loading: false,
        error: "",
        response: { result: "Done", ...action.payload },
      };

    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_AUTH:
      return {
        ...initialState,
        isLoggedIn: false,
        user: {},
      };

    default:
      return state;
  }
}

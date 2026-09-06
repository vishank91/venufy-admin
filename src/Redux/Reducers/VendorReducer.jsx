import { CREATE_VENDOR, CREATE_VENDOR_RED, GET_VENDOR, GET_VENDOR_RED, GET_VENDOR_DETAILS, GET_VENDOR_DETAILS_RED, UPDATE_VENDOR, UPDATE_VENDOR_RED } from "../Constant";

let initialState = { items: [], selected: null, pagination: {}, loading: false, error: "", response: null };

export default function VendorReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_VENDOR:
    case GET_VENDOR:
    case GET_VENDOR_DETAILS:
    case UPDATE_VENDOR:
      return { ...state, loading: true, error: "" };

    case CREATE_VENDOR_RED:
      return { ...state, selected: action.payload, loading: false, response: action.payload };

    case GET_VENDOR_RED:
      return { ...state, items: action.payload.vendors || [], pagination: action.payload.pagination || {}, loading: false, response: action.payload };

    case GET_VENDOR_DETAILS_RED:
    case UPDATE_VENDOR_RED:
      return { ...state, selected: action.payload, loading: false, response: action.payload };

    default:
      return state;
  }
}

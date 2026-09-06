import {
  CREATE_VENDOR_CATEGORY,
  CREATE_VENDOR_CATEGORY_RED,
  GET_VENDOR_CATEGORY,
  GET_VENDOR_CATEGORY_RED,
  GET_VENDOR_CATEGORY_DETAILS,
  GET_VENDOR_CATEGORY_DETAILS_RED,
  UPDATE_VENDOR_CATEGORY,
  UPDATE_VENDOR_CATEGORY_RED,
  ACTIVATE_VENDOR_CATEGORY_RED,
  DEACTIVATE_VENDOR_CATEGORY_RED,
} from "../Constant";

let initialState = { items: [], selected: null, pagination: {}, loading: false, error: "", response: null };

export default function VendorCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_VENDOR_CATEGORY:
    case GET_VENDOR_CATEGORY:
    case GET_VENDOR_CATEGORY_DETAILS:
    case UPDATE_VENDOR_CATEGORY:
      return { ...state, loading: true, error: "" };

    case CREATE_VENDOR_CATEGORY_RED:
      return { ...state, items: [...state.items, action.payload], loading: false, response: action.payload };

    case GET_VENDOR_CATEGORY_RED:
      return { ...state, items: action.payload.categories || [], pagination: action.payload.pagination || {}, loading: false, response: action.payload };

    case GET_VENDOR_CATEGORY_DETAILS_RED:
      return { ...state, selected: action.payload, loading: false, response: action.payload };

    case UPDATE_VENDOR_CATEGORY_RED:
    case ACTIVATE_VENDOR_CATEGORY_RED:
    case DEACTIVATE_VENDOR_CATEGORY_RED:
      return {
        ...state,
        items: state.items.map((x) => (x._id === action.payload._id ? action.payload : x)),
        selected: action.payload,
        loading: false,
        response: action.payload,
      };

    default:
      return state;
  }
}

import {
  CREATE_VENUE_CATEGORY,
  CREATE_VENUE_CATEGORY_RED,
  GET_VENUE_CATEGORY,
  GET_VENUE_CATEGORY_RED,
  GET_VENUE_CATEGORY_DETAILS,
  GET_VENUE_CATEGORY_DETAILS_RED,
  UPDATE_VENUE_CATEGORY,
  UPDATE_VENUE_CATEGORY_RED,
  ACTIVATE_VENUE_CATEGORY_RED,
  DEACTIVATE_VENUE_CATEGORY_RED,
} from "../Constant";

let initialState = { items: [], selected: null, pagination: {}, loading: false, error: "", response: null };

export default function VenueCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_VENUE_CATEGORY:
    case GET_VENUE_CATEGORY:
    case GET_VENUE_CATEGORY_DETAILS:
    case UPDATE_VENUE_CATEGORY:
      return { ...state, loading: true, error: "" };

    case CREATE_VENUE_CATEGORY_RED:
      return { ...state, items: [...state.items, action.payload], loading: false, response: action.payload };

    case GET_VENUE_CATEGORY_RED:
      return { ...state, items: action.payload.categories || [], pagination: action.payload.pagination || {}, loading: false, response: action.payload };

    case GET_VENUE_CATEGORY_DETAILS_RED:
      return { ...state, selected: action.payload, loading: false, response: action.payload };

    case UPDATE_VENUE_CATEGORY_RED:
    case ACTIVATE_VENUE_CATEGORY_RED:
    case DEACTIVATE_VENUE_CATEGORY_RED:
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

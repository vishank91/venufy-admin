import { CREATE_VENUE, CREATE_VENUE_RED, GET_VENUE, GET_VENUE_RED, GET_VENUE_DETAILS, GET_VENUE_DETAILS_RED, UPDATE_VENUE, UPDATE_VENUE_RED } from "../Constant";

let initialState = { items: [], selected: null, pagination: {}, loading: false, error: "", response: null };

export default function VenueReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_VENUE:
    case GET_VENUE:
    case GET_VENUE_DETAILS:
    case UPDATE_VENUE:
      return { ...state, loading: true, error: "" };

    case CREATE_VENUE_RED:
      return { ...state, selected: action.payload, loading: false, response: action.payload };

    case GET_VENUE_RED:
      return { ...state, items: action.payload.venues || [], pagination: action.payload.pagination || {}, loading: false, response: action.payload };

    case GET_VENUE_DETAILS_RED:
    case UPDATE_VENUE_RED:
      return { ...state, selected: action.payload, loading: false, response: action.payload };

    default:
      return state;
  }
}

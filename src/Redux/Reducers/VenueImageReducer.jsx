import {
  GET_VENUE_IMAGES,
  GET_VENUE_IMAGES_RED,
  CREATE_VENUE_IMAGE,
  CREATE_VENUE_IMAGE_RED,
  DELETE_VENUE_IMAGE,
  DELETE_VENUE_IMAGE_RED,
  PRIMARY_VENUE_IMAGE,
  PRIMARY_VENUE_IMAGE_RED,
  REORDER_VENUE_IMAGE,
  REORDER_VENUE_IMAGE_RED,
} from "../Constant";

let initialState = { venue: null, images: [], loading: false, error: "", response: null };

export default function VenueImageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VENUE_IMAGES:
    case CREATE_VENUE_IMAGE:
    case DELETE_VENUE_IMAGE:
    case PRIMARY_VENUE_IMAGE:
    case REORDER_VENUE_IMAGE:
      return { ...state, loading: true, error: "" };

    case GET_VENUE_IMAGES_RED:
    case CREATE_VENUE_IMAGE_RED:
    case DELETE_VENUE_IMAGE_RED:
    case PRIMARY_VENUE_IMAGE_RED:
    case REORDER_VENUE_IMAGE_RED:
      return {
        ...state,
        venue: action.payload,
        images: action.payload?.images || [],
        loading: false,
        response: action.payload,
      };

    default:
      return state;
  }
}

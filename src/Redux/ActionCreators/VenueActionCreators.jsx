import { CREATE_VENUE, GET_VENUE, GET_VENUE_DETAILS, UPDATE_VENUE } from "../Constant";
export function createVenue(data) {
  return { type: CREATE_VENUE, payload: data };
}
export function getVenue(data) {
  return { type: GET_VENUE, payload: data };
}
export function getVenueDetails(data) {
  return { type: GET_VENUE_DETAILS, payload: data };
}
export function updateVenue(data) {
  return { type: UPDATE_VENUE, payload: data };
}

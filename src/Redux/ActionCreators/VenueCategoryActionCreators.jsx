import { CREATE_VENUE_CATEGORY, GET_VENUE_CATEGORY, GET_VENUE_CATEGORY_DETAILS, UPDATE_VENUE_CATEGORY, ACTIVATE_VENUE_CATEGORY, DEACTIVATE_VENUE_CATEGORY } from "../Constant";
export function createVenueCategory(data) {
  return { type: CREATE_VENUE_CATEGORY, payload: data };
}
export function getVenueCategory(data) {
  return { type: GET_VENUE_CATEGORY, payload: data };
}
export function getVenueCategoryDetails(data) {
  return { type: GET_VENUE_CATEGORY_DETAILS, payload: data };
}
export function updateVenueCategory(data) {
  return { type: UPDATE_VENUE_CATEGORY, payload: data };
}
export function activateVenueCategory(data) {
  return { type: ACTIVATE_VENUE_CATEGORY, payload: data };
}
export function deactivateVenueCategory(data) {
  return { type: DEACTIVATE_VENUE_CATEGORY, payload: data };
}

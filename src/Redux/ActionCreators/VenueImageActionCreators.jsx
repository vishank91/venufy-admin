import { GET_VENUE_IMAGES, CREATE_VENUE_IMAGE, DELETE_VENUE_IMAGE, PRIMARY_VENUE_IMAGE, REORDER_VENUE_IMAGE } from "../Constant";
export function getVenueImages(data) {
  return { type: GET_VENUE_IMAGES, payload: data };
}
export function createVenueImage(data) {
  return { type: CREATE_VENUE_IMAGE, payload: data };
}
export function deleteVenueImage(data) {
  return { type: DELETE_VENUE_IMAGE, payload: data };
}
export function primaryVenueImage(data) {
  return { type: PRIMARY_VENUE_IMAGE, payload: data };
}
export function reorderVenueImage(data) {
  return { type: REORDER_VENUE_IMAGE, payload: data };
}

import { CREATE_VENDOR, GET_VENDOR, GET_VENDOR_DETAILS, UPDATE_VENDOR } from "../Constant";
export function createVendor(data) {
  return { type: CREATE_VENDOR, payload: data };
}
export function getVendor(data) {
  return { type: GET_VENDOR, payload: data };
}
export function getVendorDetails(data) {
  return { type: GET_VENDOR_DETAILS, payload: data };
}
export function updateVendor(data) {
  return { type: UPDATE_VENDOR, payload: data };
}

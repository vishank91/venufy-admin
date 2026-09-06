import { CREATE_VENDOR_CATEGORY, GET_VENDOR_CATEGORY, GET_VENDOR_CATEGORY_DETAILS, UPDATE_VENDOR_CATEGORY, ACTIVATE_VENDOR_CATEGORY, DEACTIVATE_VENDOR_CATEGORY } from "../Constant";
export function createVendorCategory(data) {
  return { type: CREATE_VENDOR_CATEGORY, payload: data };
}
export function getVendorCategory(data) {
  return { type: GET_VENDOR_CATEGORY, payload: data };
}
export function getVendorCategoryDetails(data) {
  return { type: GET_VENDOR_CATEGORY_DETAILS, payload: data };
}
export function updateVendorCategory(data) {
  return { type: UPDATE_VENDOR_CATEGORY, payload: data };
}
export function activateVendorCategory(data) {
  return { type: ACTIVATE_VENDOR_CATEGORY, payload: data };
}
export function deactivateVendorCategory(data) {
  return { type: DEACTIVATE_VENDOR_CATEGORY, payload: data };
}

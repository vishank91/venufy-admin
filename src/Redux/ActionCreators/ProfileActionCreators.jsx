import { GET_PROFILE, CREATE_PROFILE, UPDATE_PROFILE } from "../Constant";
export function getProfile(data) {
  return { type: GET_PROFILE, payload: data };
}
export function createProfile(data) {
  return { type: CREATE_PROFILE, payload: data };
}
export function updateProfile(data) {
  return { type: UPDATE_PROFILE, payload: data };
}

import { CREATE_USER, GET_USER, GET_USER_DETAILS, UPDATE_USER, DELETE_USER } from "../Constant";
export function createUser(data) {
  return { type: CREATE_USER, payload: data };
}
export function getUser(data) {
  return { type: GET_USER, payload: data };
}
export function getUserDetails(data) {
  return { type: GET_USER_DETAILS, payload: data };
}
export function updateUser(data) {
  return { type: UPDATE_USER, payload: data };
}
export function deleteUser(data) {
  return { type: DELETE_USER, payload: data };
}

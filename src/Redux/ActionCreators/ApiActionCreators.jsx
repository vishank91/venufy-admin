import { API_ERROR, CLEAR_API_ERROR } from "../Constant";
export function apiError(data) {
  return { type: API_ERROR, payload: data };
}
export function clearApiError() {
  return { type: CLEAR_API_ERROR };
}

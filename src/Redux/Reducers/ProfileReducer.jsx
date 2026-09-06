import { GET_PROFILE, GET_PROFILE_RED, CREATE_PROFILE, CREATE_PROFILE_RED, UPDATE_PROFILE, UPDATE_PROFILE_RED } from "../Constant";

let initialState = { profile: null, loading: false, error: "", response: null };

export default function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
    case CREATE_PROFILE:
    case UPDATE_PROFILE:
      return { ...state, loading: true, error: "" };

    case GET_PROFILE_RED:
    case CREATE_PROFILE_RED:
    case UPDATE_PROFILE_RED:
      return { ...state, profile: action.payload, loading: false, response: action.payload };

    default:
      return state;
  }
}

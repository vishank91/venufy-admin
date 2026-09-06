import { CREATE_USER, CREATE_USER_RED, GET_USER, GET_USER_RED, GET_USER_DETAILS, GET_USER_DETAILS_RED, UPDATE_USER, UPDATE_USER_RED, DELETE_USER, DELETE_USER_RED } from "../Constant";

let initialState = {
  users: [],
  selectedUser: null,
  pagination: {},
  loading: false,
  error: "",
  response: null,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
    case GET_USER:
    case GET_USER_DETAILS:
    case UPDATE_USER:
    case DELETE_USER:
      return { ...state, loading: true, error: "" };

    case CREATE_USER_RED:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        response: action.payload,
      };

    case GET_USER_RED:
      return {
        ...state,
        users: action.payload.users || [],
        pagination: action.payload.pagination || {},
        loading: false,
        response: action.payload,
      };

    case GET_USER_DETAILS_RED:
      return {
        ...state,
        selectedUser: action.payload,
        loading: false,
        response: action.payload,
      };

    case UPDATE_USER_RED:
      return {
        ...state,
        users: state.users.map((x) => ((x._id || x.id) === (action.payload._id || action.payload.id) ? action.payload : x)),
        selectedUser: action.payload,
        loading: false,
        response: action.payload,
      };

    case DELETE_USER_RED:
      return {
        ...state,
        users: state.users.filter((x) => (x._id || x.id) !== action.payload),
        loading: false,
        response: action.payload,
      };

    default:
      return state;
  }
}

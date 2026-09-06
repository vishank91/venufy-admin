import { API_ERROR, CLEAR_API_ERROR } from "../Constant";

export default function ApiReducer(state = { error: "" }, action) {
  switch (action.type) {
    case API_ERROR:
      return { error: action.payload };

    case CLEAR_API_ERROR:
      return { error: "" };

    default:
      return state;
  }
}

import { put, takeEvery } from "redux-saga/effects";
import { GET_PROFILE, GET_PROFILE_RED, CREATE_PROFILE, CREATE_PROFILE_RED, UPDATE_PROFILE, UPDATE_PROFILE_RED, API_ERROR } from "../Constant";
import { getRecord, createRecord, updateRecordPath } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* getSaga() {
  let response = yield getRecord("vendors/profile");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_PROFILE_RED, payload: response.data.data || response.data });
}

function* createSaga(action) {
  let response = yield createRecord("vendors/profile", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: CREATE_PROFILE_RED, payload: response.data.data || response.data });
}

function* updateSaga(action) {
  let response = yield updateRecordPath("vendors/profile", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: UPDATE_PROFILE_RED, payload: response.data.data || response.data });
}

export default function* ProfileSagas() {
  yield takeEvery(GET_PROFILE, getSaga);
  yield takeEvery(CREATE_PROFILE, createSaga);
  yield takeEvery(UPDATE_PROFILE, updateSaga);
}

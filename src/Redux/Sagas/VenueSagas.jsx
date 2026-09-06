import { put, takeEvery } from "redux-saga/effects";
import { CREATE_VENUE, CREATE_VENUE_RED, GET_VENUE, GET_VENUE_RED, GET_VENUE_DETAILS, GET_VENUE_DETAILS_RED, UPDATE_VENUE, UPDATE_VENUE_RED, API_ERROR } from "../Constant";
import { createRecord, getRecord, getRecordById, updateRecordPath } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* createSaga(action) {
  let response = yield createRecord("venue/profile", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: CREATE_VENUE_RED, payload: response.data.data || response.data });
}

function* getSaga(action) {
  let response = yield getRecord("venue", action.payload?.query || "");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENUE_RED, payload: response.data.data || response.data });
}

function* detailsSaga(action) {
  let response = yield getRecordById("venue", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENUE_DETAILS_RED, payload: response.data.data || response.data });
}

function* updateSaga(action) {
  let response = yield updateRecordPath("venue/profile", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: UPDATE_VENUE_RED, payload: response.data.data || response.data });
}

export default function* VenueSagas() {
  yield takeEvery(CREATE_VENUE, createSaga);
  yield takeEvery(GET_VENUE, getSaga);
  yield takeEvery(GET_VENUE_DETAILS, detailsSaga);
  yield takeEvery(UPDATE_VENUE, updateSaga);
}

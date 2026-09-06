import { put, takeEvery } from "redux-saga/effects";
import {
  CREATE_VENUE_CATEGORY,
  CREATE_VENUE_CATEGORY_RED,
  GET_VENUE_CATEGORY,
  GET_VENUE_CATEGORY_RED,
  GET_VENUE_CATEGORY_DETAILS,
  GET_VENUE_CATEGORY_DETAILS_RED,
  UPDATE_VENUE_CATEGORY,
  UPDATE_VENUE_CATEGORY_RED,
  ACTIVATE_VENUE_CATEGORY,
  ACTIVATE_VENUE_CATEGORY_RED,
  DEACTIVATE_VENUE_CATEGORY,
  DEACTIVATE_VENUE_CATEGORY_RED,
  API_ERROR,
} from "../Constant";
import { createRecord, getRecord, getRecordById, patchRecord, updateRecordById } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* createSaga(action) {
  let response = yield createRecord("venue-categories", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: CREATE_VENUE_CATEGORY_RED, payload: response.data.data || response.data });
}

function* getSaga(action) {
  let response = yield getRecord("venue-categories", action.payload?.query || "");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENUE_CATEGORY_RED, payload: response.data.data || response.data });
}

function* detailsSaga(action) {
  let response = yield getRecordById("venue-categories", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENUE_CATEGORY_DETAILS_RED, payload: response.data.data || response.data });
}

function* updateSaga(action) {
  let response = yield updateRecordById("venue-categories", action.payload.id, action.payload.data);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: UPDATE_VENUE_CATEGORY_RED, payload: response.data.data || response.data });
}

function* activateSaga(action) {
  let response = yield patchRecord("venue-categories", `${action.payload}/activate`);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: ACTIVATE_VENUE_CATEGORY_RED, payload: response.data.data || response.data });
}

function* deactivateSaga(action) {
  let response = yield patchRecord("venue-categories", `${action.payload}/deactivate`);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: DEACTIVATE_VENUE_CATEGORY_RED, payload: response.data.data || response.data });
}

export default function* VenueCategorySagas() {
  yield takeEvery(CREATE_VENUE_CATEGORY, createSaga);
  yield takeEvery(GET_VENUE_CATEGORY, getSaga);
  yield takeEvery(GET_VENUE_CATEGORY_DETAILS, detailsSaga);
  yield takeEvery(UPDATE_VENUE_CATEGORY, updateSaga);
  yield takeEvery(ACTIVATE_VENUE_CATEGORY, activateSaga);
  yield takeEvery(DEACTIVATE_VENUE_CATEGORY, deactivateSaga);
}

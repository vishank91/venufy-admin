import { put, takeEvery } from "redux-saga/effects";
import { CREATE_VENDOR, CREATE_VENDOR_RED, GET_VENDOR, GET_VENDOR_RED, GET_VENDOR_DETAILS, GET_VENDOR_DETAILS_RED, UPDATE_VENDOR, UPDATE_VENDOR_RED, API_ERROR } from "../Constant";
import { createRecord, getRecord, getRecordById, updateRecordPath } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* createSaga(action) {
  let response = yield createRecord("vendors/profile", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: CREATE_VENDOR_RED, payload: response.data.data || response.data });
}

function* getSaga(action) {
  let response = yield getRecord("vendors", action.payload?.query || "");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENDOR_RED, payload: response.data.data || response.data });
}

function* detailsSaga(action) {
  let response = yield getRecordById("vendors", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENDOR_DETAILS_RED, payload: response.data.data || response.data });
}

function* updateSaga(action) {
  let response = yield updateRecordPath("vendors/profile", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: UPDATE_VENDOR_RED, payload: response.data.data || response.data });
}

export default function* VendorSagas() {
  yield takeEvery(CREATE_VENDOR, createSaga);
  yield takeEvery(GET_VENDOR, getSaga);
  yield takeEvery(GET_VENDOR_DETAILS, detailsSaga);
  yield takeEvery(UPDATE_VENDOR, updateSaga);
}

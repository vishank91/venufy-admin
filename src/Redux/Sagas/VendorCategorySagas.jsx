import { put, takeEvery } from "redux-saga/effects";
import {
  CREATE_VENDOR_CATEGORY,
  CREATE_VENDOR_CATEGORY_RED,
  GET_VENDOR_CATEGORY,
  GET_VENDOR_CATEGORY_RED,
  GET_VENDOR_CATEGORY_DETAILS,
  GET_VENDOR_CATEGORY_DETAILS_RED,
  UPDATE_VENDOR_CATEGORY,
  UPDATE_VENDOR_CATEGORY_RED,
  ACTIVATE_VENDOR_CATEGORY,
  ACTIVATE_VENDOR_CATEGORY_RED,
  DEACTIVATE_VENDOR_CATEGORY,
  DEACTIVATE_VENDOR_CATEGORY_RED,
  API_ERROR,
} from "../Constant";
import { createRecord, getRecord, getRecordById, patchRecord, updateRecordById } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* createSaga(action) {
  let response = yield createRecord("vendor-categories", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: CREATE_VENDOR_CATEGORY_RED, payload: response.data.data || response.data });
}

function* getSaga(action) {
  let response = yield getRecord("vendor-categories", action.payload?.query || "");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENDOR_CATEGORY_RED, payload: response.data.data || response.data });
}

function* detailsSaga(action) {
  let response = yield getRecordById("vendor-categories", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENDOR_CATEGORY_DETAILS_RED, payload: response.data.data || response.data });
}

function* updateSaga(action) {
  let response = yield updateRecordById("vendor-categories", action.payload.id, action.payload.data);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: UPDATE_VENDOR_CATEGORY_RED, payload: response.data.data || response.data });
}

function* activateSaga(action) {
  let response = yield patchRecord("vendor-categories", `${action.payload}/activate`);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: ACTIVATE_VENDOR_CATEGORY_RED, payload: response.data.data || response.data });
}

function* deactivateSaga(action) {
  let response = yield patchRecord("vendor-categories", `${action.payload}/deactivate`);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: DEACTIVATE_VENDOR_CATEGORY_RED, payload: response.data.data || response.data });
}

export default function* VendorCategorySagas() {
  yield takeEvery(CREATE_VENDOR_CATEGORY, createSaga);
  yield takeEvery(GET_VENDOR_CATEGORY, getSaga);
  yield takeEvery(GET_VENDOR_CATEGORY_DETAILS, detailsSaga);
  yield takeEvery(UPDATE_VENDOR_CATEGORY, updateSaga);
  yield takeEvery(ACTIVATE_VENDOR_CATEGORY, activateSaga);
  yield takeEvery(DEACTIVATE_VENDOR_CATEGORY, deactivateSaga);
}

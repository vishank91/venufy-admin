import { put, takeEvery } from "redux-saga/effects";
import {
  GET_VENUE_IMAGES,
  GET_VENUE_IMAGES_RED,
  CREATE_VENUE_IMAGE,
  CREATE_VENUE_IMAGE_RED,
  DELETE_VENUE_IMAGE,
  DELETE_VENUE_IMAGE_RED,
  PRIMARY_VENUE_IMAGE,
  PRIMARY_VENUE_IMAGE_RED,
  REORDER_VENUE_IMAGE,
  REORDER_VENUE_IMAGE_RED,
  API_ERROR,
} from "../Constant";
import { getRecord, createMultipartRecord, deleteRecordById, patchRecord } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* getSaga() {
  let response = yield getRecord("venue/profile");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: GET_VENUE_IMAGES_RED, payload: response.data.data || response.data });
}

function* createSaga(action) {
  let response = yield createMultipartRecord("venue/images", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: CREATE_VENUE_IMAGE_RED, payload: response.data.data || response.data });
}

function* deleteSaga(action) {
  let response = yield deleteRecordById("venue/images", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: DELETE_VENUE_IMAGE_RED, payload: response.data.data || response.data });
}

function* primarySaga(action) {
  let response = yield patchRecord("venue/images", `${action.payload}/primary`);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: PRIMARY_VENUE_IMAGE_RED, payload: response.data.data || response.data });
}

function* reorderSaga(action) {
  let response = yield patchRecord("venue/images", "reorder", { imageIds: action.payload });

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: REORDER_VENUE_IMAGE_RED, payload: response.data.data || response.data });
}

export default function* VenueImageSagas() {
  yield takeEvery(GET_VENUE_IMAGES, getSaga);
  yield takeEvery(CREATE_VENUE_IMAGE, createSaga);
  yield takeEvery(DELETE_VENUE_IMAGE, deleteSaga);
  yield takeEvery(PRIMARY_VENUE_IMAGE, primarySaga);
  yield takeEvery(REORDER_VENUE_IMAGE, reorderSaga);
}

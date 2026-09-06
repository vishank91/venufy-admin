import { put, takeEvery } from "redux-saga/effects";
import { CREATE_USER, CREATE_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, GET_USER_DETAILS, GET_USER_DETAILS_RED, UPDATE_USER, UPDATE_USER_RED, API_ERROR } from "../Constant";
import { createRecord, deleteRecordById, getRecord, getRecordById, updateRecordById } from "./APICallingService";

function getReason(data) {
  return typeof data.reason === "object" ? Object.values(data.reason || {}).join(", ") : data.reason || data.message || "Request failed.";
}

function* createSaga(action) {
  let response = yield createRecord("users", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({
    type: CREATE_USER_RED,
    payload: response.data.data || response.data,
  });
}

function* getSaga(action) {
  let response = yield getRecord("users", action.payload?.query || "");

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({
    type: GET_USER_RED,
    payload: response.data.data || response.data,
  });
}

function* detailsSaga(action) {
  let response = yield getRecordById("users", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({
    type: GET_USER_DETAILS_RED,
    payload: response.data.data || response.data,
  });
}

function* updateSaga(action) {
  let response = yield updateRecordById("users", action.payload.id, action.payload.data);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({
    type: UPDATE_USER_RED,
    payload: response.data.data || response.data,
  });
}

function* deleteSaga(action) {
  let response = yield deleteRecordById("users", action.payload);

  if (!response.response.ok || response.data.result === "Fail") {
    yield put({ type: API_ERROR, payload: getReason(response.data) });
    return;
  }

  yield put({ type: DELETE_USER_RED, payload: action.payload });
}

export default function* UserSagas() {
  yield takeEvery(CREATE_USER, createSaga);
  yield takeEvery(GET_USER, getSaga);
  yield takeEvery(GET_USER_DETAILS, detailsSaga);
  yield takeEvery(UPDATE_USER, updateSaga);
  yield takeEvery(DELETE_USER, deleteSaga);
}

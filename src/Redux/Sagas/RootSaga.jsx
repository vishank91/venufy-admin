import { all } from "redux-saga/effects";
import AuthSagas from "./AuthSagas";
import UserSagas from "./UserSagas";
import VendorCategorySagas from "./VendorCategorySagas";
import VenueCategorySagas from "./VenueCategorySagas";
import VendorSagas from "./VendorSagas";
import VenueSagas from "./VenueSagas";
import VenueImageSagas from "./VenueImageSagas";
import ProfileSagas from "./ProfileSagas";

export default function* RootSaga() {
  yield all([AuthSagas(), UserSagas(), VendorCategorySagas(), VenueCategorySagas(), VendorSagas(), VenueSagas(), VenueImageSagas(), ProfileSagas()]);
}

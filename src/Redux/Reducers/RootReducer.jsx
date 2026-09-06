import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import VendorCategoryReducer from "./VendorCategoryReducer";
import VenueCategoryReducer from "./VenueCategoryReducer";
import VendorReducer from "./VendorReducer";
import VenueReducer from "./VenueReducer";
import VenueImageReducer from "./VenueImageReducer";
import ProfileReducer from "./ProfileReducer";
import ApiReducer from "./ApiReducer";

export default combineReducers({
  AuthReducer,
  UserReducer,
  VendorCategoryReducer,
  VenueCategoryReducer,
  VendorReducer,
  VenueReducer,
  VenueImageReducer,
  ProfileReducer,
  ApiReducer,
});

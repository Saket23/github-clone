import { combineReducers } from "redux";
import getProfileData from "./getProfileData";
import getRepoData from "./getRepoData";
import editInput from "./editInput";

export default combineReducers({
  getProfileData,
  getRepoData,
  editInput
});

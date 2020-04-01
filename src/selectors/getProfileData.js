import { createSelector } from "reselect";

function getData(state) {
  return state.getProfileData.data;
}
function isDataLoaded(data) {
  return data.length !== 0;
}

export const isProfileDataLoadedSelector = createSelector(
  getData,
  isDataLoaded
);

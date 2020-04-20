import axios from "axios";

function start() {
  return {
    type: "GET_PROFILE_DATA_START"
  };
}

function success(data) {
  return {
    type: "GET_PROFILE_DATA_SUCCESS",
    data
  };
}

function failure(error) {
  return {
    type: "GET_PROFILE_DATA_FAILURE",
    error
  };
}

function getDataUrl() {
  return axios.get(`https://api.github.com/users/saket23`);
}

export default function getProfileData() {
  return dispatch => {
    dispatch(start());
    return getDataUrl()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}

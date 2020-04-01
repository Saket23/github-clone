const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default function getProfileData(state = initialState, action) {
  switch (action.type) {
    case "GET_PROFILE_DATA_START":
      return { ...state, isLoading: true };
    case "GET_PROFILE_DATA_SUCCESS":
      return { ...state, isLoading: false, data: action.data };
    case "GET_PROFILE_DATA_FAILURE":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}

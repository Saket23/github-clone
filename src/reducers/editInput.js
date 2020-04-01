const initialState = {
  search: "",
  languageFilter: "All",
  typeFilter: "All"
};

export default function editInput(state = initialState, action) {
  switch (action.type) {
    case "EDIT_SEARCH":
      return { ...state, search: action.value };
    case "EDIT_LANGUAGE_FILTER":
      return { ...state, languageFilter: action.language };
    case "EDIT_TYPE_FILTER":
      return { ...state, typeFilter: action.value };
    default:
      return state;
  }
}

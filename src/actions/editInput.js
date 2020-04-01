export function editSearch(value) {
  return {
    type: "EDIT_SEARCH",
    value
  };
}

export function editLanguageFilter(language) {
  return {
    type: "EDIT_LANGUAGE_FILTER",
    language
  };
}

export function editTypeFilter(type) {
  return {
    type: "EDIT_TYPE_FILTER",
    value: type
  };
}

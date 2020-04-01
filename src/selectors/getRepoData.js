import { createSelector } from "reselect";

function getData(state) {
  return state.getRepoData.data;
}
function isDataLoaded(data) {
  return data.length !== 0;
}

export const isRepoDataLoadedSelector = createSelector(getData, isDataLoaded);

function getSearchValue(state) {
  return state.editInput.search;
}

function getRepoData(searchValue, languageValue, typeValue, data) {
  if (searchValue === "" && languageValue === "All" && typeValue === "All")
    return data;
  let newData = data;
  if (searchValue !== "") {
    newData = newData.filter(d => {
      return d.name.includes(searchValue);
    });
  }
  if (languageValue !== "All") {
    newData = newData.filter(d => d.language === languageValue);
  }
  if (typeValue !== "All") {
    switch (typeValue) {
      case "Public":
        newData = newData.filter(d => d.private === false);
        break;
      case "Private":
        newData = newData.filter(d => d.private === true);
        break;
      case "Sources":
        newData = newData.filter(d => d.fork === false);
        break;
      case "Forks":
        newData = newData.filter(d => d.fork === true);
        break;
      case "Archived":
        newData = newData.filter(d => d.archived === false);
        break;
      case "Mirrors":
        newData = newData.filter(d => d.mirror_url !== null);
        break;
      default:
        return newData;
    }
  }
  return newData;
}

function getLanguageValue(state) {
  return state.editInput.languageFilter;
}

function getTypeValue(state) {
  return state.editInput.typeFilter;
}

export const getRepoDataSelector = createSelector(
  getSearchValue,
  getLanguageValue,
  getTypeValue,
  getData,
  getRepoData
);

function getLanguageOptions(data) {
  const language = [];
  let index = 1;
  for (let d of data) {
    const isLanguagePresent = language.some(lang => lang.value === d.language);
    if (d.language && !isLanguagePresent) {
      const obj = {};
      obj["key"] = index;
      obj["value"] = d.language;
      index++;
      language.push(obj);
    }
  }
  return language;
}

export const getLanguageOptionsSelector = createSelector(
  getData,
  getLanguageOptions
);

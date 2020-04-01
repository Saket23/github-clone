import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getRepoData from "../actions/getRepoData";
import { isRepoDataLoadedSelector } from "../selectors/getRepoData";
import {
  Wrapper,
  TopInput,
  NewButton,
  Input,
  Buttons
} from "../styles/repoTab";
import Header from "./Header";
import Row from "./Row";
import Dropdown from "./Dropdown";
import {
  editSearch,
  editLanguageFilter,
  editTypeFilter
} from "../actions/editInput";
import {
  getRepoDataSelector,
  getLanguageOptionsSelector
} from "../selectors/getRepoData";

class RepoTab extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }
  componentDidMount() {
    const { getRepoData } = this.props;
    getRepoData();
  }

  handleSearchValueChange(e) {
    const { editSearch } = this.props;
    editSearch(e.target.value);
  }

  render() {
    const {
      isRepoDataLoaded,
      repoData,
      searchValue,
      languageOptions,
      editLanguageFilter,
      languageFilter,
      editTypeFilter,
      typeFilter
    } = this.props;

    return (
      <Wrapper>
        {isRepoDataLoaded && (
          <>
            <Header length={repoData.length} />
            <TopInput>
              <Input>
                <input
                  placeholder="Find a repository..."
                  value={searchValue}
                  onChange={this.handleSearchValueChange}
                />
              </Input>
              <Buttons>
                <Dropdown
                  type="Type"
                  selected={typeFilter}
                  options={[
                    { key: 1, value: "Public" },
                    { key: 2, value: "Private" },
                    { key: 3, value: "Sources" },
                    { key: 4, value: "Forks" },
                    { key: 5, value: "Archived" },
                    { key: 6, value: "Mirrors" }
                  ]}
                  onListClick={editTypeFilter}
                />
                <Dropdown
                  type="Language"
                  selected={languageFilter}
                  options={languageOptions}
                  onListClick={editLanguageFilter}
                />
                <NewButton>
                  <svg
                    className="octicon octicon-repo"
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="12"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    ></path>
                  </svg>
                  <span>New</span>
                </NewButton>
              </Buttons>
            </TopInput>
            {repoData.map(data => (
              <Row data={data} key={data.id} />
            ))}
          </>
        )}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchValue: state.editInput.search,
    repoData: getRepoDataSelector(state),
    isRepoDataLoaded: isRepoDataLoadedSelector(state),
    languageOptions: getLanguageOptionsSelector(state),
    languageFilter: state.editInput.languageFilter,
    typeFilter: state.editInput.typeFilter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getRepoData, editSearch, editLanguageFilter, editTypeFilter },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoTab);

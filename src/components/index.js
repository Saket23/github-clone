import React from "react";
import ProfilePanel from "./ProfilePanel";
import RepoTab from "./RepoTab";
import { Wrapper, RepoTabWrapper, ProfilePanelWrapper } from "../styles";

const GithubPages = () => {
  return (
    <Wrapper>
      <ProfilePanelWrapper>
        <ProfilePanel />
      </ProfilePanelWrapper>
      <RepoTabWrapper>
        <RepoTab />
      </RepoTabWrapper>
    </Wrapper>
  );
};

export default GithubPages;

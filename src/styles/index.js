import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1500px) and (min-width: 415px) {
    margin: 24px 80px;
  }

  @media (max-width: 414px) {
    flex-direction: column;
    padding: 0px 16px;
    margin-top: 24px;
  }
`;

export const ProfilePanelWrapper = styled.div`
  @media (max-width: 1500px) and (min-width: 415px) {
    flex-basis: 30%;
  }
`;

export const RepoTabWrapper = styled.div`
  @media (max-width: 1500px) and (min-width: 415px) {
    flex-basis: 70%;
  }
`;

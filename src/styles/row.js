import styled from "styled-components";

const colorLanguage = {
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26"
};

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d1d5da;
  padding: 24px 0px;
`;

export const Name = styled.a`
  color: #0366d6;
  text-decoration: none;
  font-size: 1.17em;
  font-weight: bold;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Description = styled.p`
  margin-bottom: 8px;
  color: #586069;
  width: 75%;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const ColorCircle = styled.div`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props =>
    colorLanguage[props.language] ? colorLanguage[props.language] : "#f1e05a"};
`;

export const Language = styled.div`
  font-size: 12px;
  color: #586069;
  margin-left: 10px;
`;

export const LicenseWrapper = styled.div`
  color: #586069;
  display: flex;
  font-size: 12px;
  svg {
    vertical-align: text-top;
  }
  margin-right: 16px;
`;

export const License = styled.div`
  margin-left: 10px;
`;

export const Details = styled.div`
  display: flex;
`;

export const Update = styled.div`
  font-size: 12px;
  color: #586069;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StarButton = styled.button`
  padding: 3px 10px;
  font-size: 12px;
  line-height: 20px;

  color: #24292e;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  font-weight: bold;
  border-radius: 0.25em;
  svg {
    fill: #586069;
    margin-right: 10px;
    vertical-align: text-bottom;
  }
`;

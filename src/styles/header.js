import styled from "styled-components";

export const Tab = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #d1d5da;
  overflow: hidden;
`;

export const SingleTab = styled.div`
  padding: 8px 16px;
  margin-right: 16px;
  cursor: pointer;
  ${props =>
    props.selected
      ? `font-weight: 600;
  color: #24292e;
  border-bottom: 2px solid #e36209;`
      : ``}
`;

export const Text = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: #586069;
  text-align: center;
`;

export const Data = styled.span`
  padding: 2px 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  color: #586069;
  background-color: rgba(27, 31, 35, 0.08);
  border-radius: 20px;
  margin-left: 5px;
`;

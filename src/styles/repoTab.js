import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 8px;
`;

export const TopInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #d1d5da;
  padding: 16px 0px;

  input {
    margin-right: 10px;
    padding: 6px 8px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
    width: 80%;
    @media (max-width: 450px) {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const NewButton = styled.button`
  color: #fff;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  border-radius: 3px;

  svg {
    vertical-align: text-top;
    fill: #fff;
    margin-right: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
`;

export const Input = styled.div`
  flex: auto;
  width: 500px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

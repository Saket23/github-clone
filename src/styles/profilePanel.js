import styled from "styled-components";

export const ImageWrapper = styled.img`
  height: 260px;
  width: 260px;
  border-radius: 3px;

  @media (max-width: 414px) {
    height: 75px;
    width: 75px;
    padding-right: 24px;
  }
`;

export const NameWrapper = styled.div`
  padding: 16px 0px;
`;

export const Name = styled.div`
  font-size: 26px;
  line-height: 30px;
  font-weight: 900;
`;

export const Login = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color: #666;
`;

export const Button = styled.button`
  color: #24292e;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  width: 260px;
  padding: 12px 6px;
  margin-bottom: 16px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const Bio = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Company = styled.div`
  position: relative;
  margin: 5px 0px;
  font-size: 14px;
  svg {
    vertical-align: text-bottom;
  }
  span {
    position: absolute;
    left: 25px;
  }
`;

export const Location = styled.div`
  position: relative;
  margin: 5px 0px;
  font-size: 14px;
  svg {
    vertical-align: text-bottom;
  }
  span {
    position: absolute;
    left: 25px;
  }
`;

export const Email = styled.div`
  position: relative;
  margin: 5px 0px;
  font-size: 14px;
  svg {
    vertical-align: text-bottom;
  }
  a {
    position: absolute;
    left: 25px;
    color: #0366d6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Block = styled.div`
  font-size: 12px;
  color: #586069;
  margin: 20px 0px;
`;

export const Top = styled.div`
  @media (max-width: 414px) {
    display: flex;
  }
`;

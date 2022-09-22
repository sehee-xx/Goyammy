import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background-color: #ffdead;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-top: 10px;
  font-family: "live";
  font-style: normal;
  color: orange;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: orange;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #cd863f;
  }
`;

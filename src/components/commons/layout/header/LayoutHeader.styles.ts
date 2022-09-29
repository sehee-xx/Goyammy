import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background-color: #fff;
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

export const InnerLogo = styled.img`
  height: 60px;
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

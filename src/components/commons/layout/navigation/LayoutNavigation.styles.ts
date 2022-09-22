import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #cd863f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  font-size: 22px;
  cursor: pointer;
  :hover {
    color: #ffd700;
  }
`;

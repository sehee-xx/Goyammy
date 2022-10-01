import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  background-color: #f39c1f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    color: #464747;
  }
`;

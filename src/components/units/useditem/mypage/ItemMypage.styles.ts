import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  background-color: #ffdab9;
  margin-right: 24px;
  text-align: center;
  color: #8b4513;
  cursor: pointer;
  :hover {
    background-color: orange;
    color: white;
  }
`;

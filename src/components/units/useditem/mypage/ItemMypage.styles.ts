import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Main = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  padding: 80px 102px 0px 102px;
  border-radius: 10px;
`;

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

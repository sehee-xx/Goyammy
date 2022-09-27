import styled from "@emotion/styled";
import { CheckCircleOutlined } from "@ant-design/icons";

export const Main = styled.div`
  width: 850px;
  background-color: white;
  border-radius: 30px;
  border: 3px solid #cd863f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 50px 50px 50px;
`;
export const Header = styled.div``;
export const Logo = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-top: 10px;
  font-family: "live";
  font-style: normal;
  color: orange;
  cursor: pointer;
  padding-bottom: 30px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
export const Error = styled.div`
  color: #ff6347;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-left: 30px;
  padding-bottom: 10px;
`;
export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;
export const LoginStatusCheck = styled(CheckCircleOutlined)`
  margin-right: 10px;
  font-size: 20px;
  color: orange;
  font-weight: 700;
  cursor: pointer;
`;
export const StatusText = styled.label`
  font-size: 20px;
  color: #8b4513;
`;
export const Footer = styled.div``;
export const Label = styled.label`
  color: #8b4513;
  padding: 0px 5px;
`;

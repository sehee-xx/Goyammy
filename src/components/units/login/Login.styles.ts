import styled from "@emotion/styled";
import { CheckCircleOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

export const Main = styled.form`
  width: 600px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 120px;
  margin-top: 50px;
`;

export const Header = styled.div``;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 900;
  font-family: "live";
  font-style: normal;
  color: #f39c1f;
  padding-bottom: 30px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Error = styled.div`
  color: #ff0033;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-left: 10px;
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
  color: #464747;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Question = styled.label`
  color: #464747;
  padding: 0px 5px;
`;

export const Signup = styled.div`
  font-weight: 700;
  color: orange;
  cursor: pointer;
`;
